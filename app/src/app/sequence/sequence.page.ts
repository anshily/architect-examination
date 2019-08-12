import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.page.html',
  styleUrls: ['./sequence.page.scss'],
})
export class SequencePage implements OnInit {

    curQuestionIndex = 0;
    curQuestion;
    questionLength = 0;
    resultArr = [];
    questionArr = [];


    constructor(private http: HttpClient, public alertController: AlertController) { }

  ngOnInit() {
    // '/simple/test/orderQuestionTest'
    this.http.get(ROOT_URL + 'simple/test/orderQuestionTest?token=' + localStorage.getItem('user_token')).subscribe(res => {
      console.log(res);
      if (res['code'] == 0){
        this.questionArr = res['data']['title'];

          if (localStorage.getItem('sequence-random-magic')) {
              let storage = JSON.parse(localStorage.getItem('sequence-random-magic'));
              console.log(storage);
              if (storage['questionArr'] && storage['questionArr'].length > 0) {
                  this.questionArr = storage['questionArr'];
              }

              if (storage['curQuestionIndex']) {
                  this.curQuestionIndex = storage['curQuestionIndex'];
              }
          }

          if (this.questionArr.length > 0) {
              this.questionLength = this.questionArr.length;
              this.curQuestion = this.questionArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
          }
      }
    });
  }

    ngOnDestroy() {
        console.log('destroy!');
        let storge = {
            curQuestionIndex: this.curQuestionIndex,
            questionArr: this.questionArr
        }
        localStorage.setItem('sequence-random-magic', JSON.stringify(storge));
    }

    prevQuestion() {
        if (this.curQuestionIndex > 0) {
            this.curQuestionIndex--;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    nextQuestion() {

        // 已提交
        if (this.questionArr[this.curQuestionIndex]['done']) {
            this.scrollToNext();
        }else {
            // 从子组件中发出判题结果 判断该题正误 若错误弹出提示
            if (this.questionArr[this.curQuestionIndex]['res']) {
                let simple = this.questionArr[this.curQuestionIndex]['res'];
                if (simple['childQuestionResult']) {
                    // sumStatus
                    this.questionArr[this.curQuestionIndex]['sumStatus'] = 1;
                    let wrong = false;
                    simple['childQuestionResult'].forEach(child => {
                        if (child['res']) {
                            let question = child['res'];
                            if (!question['isRight']){
                                wrong = true;
                            }
                            this.http.post(ROOT_URL + 'simple/test/add', {
                                token: localStorage.getItem('user_token'),
                                simpleTest: {
                                    question_title_id: question['question']['question_bank_id'],
                                    answer: question['userResult'].toString(),
                                    istrue: question['isRight'] ? 1 : 0
                                }
                            }).subscribe(res => {
                                console.log(res);
                            });
                        }
                    });
                    if (wrong) {
                        this.presentSumAlertConfirm('').then();
                    } else {
                        this.scrollToNext();
                        return;
                    }
                }
                if (simple['questionResult']) {
                    if (!simple['questionResult']['isRight']) {
                        this.presentAlertConfirm(simple['questionResult']['userResult'].toString(),
                            simple['questionResult']['rightResult'].toString());
                    }else {
                        this.scrollToNext();
                        return;
                    }
                    let params = {
                        token: localStorage.getItem('user_token'),
                        simpleTest: {
                            question_id: this.questionArr[this.curQuestionIndex]['question_bank_id'],
                            answer: simple['questionResult']['userResult'].toString(),
                            istrue: simple['questionResult']['isRight'] ? 1 : 0
                        }
                    }
                    this.http.post(ROOT_URL + 'simple/test/add', params).subscribe(res => {
                        console.log(res);
                    });
                }
            } else {
                this.scrollToNext();
                return;
            }
            this.questionArr[this.curQuestionIndex]['done'] = 1;
        }
        // this.questionArr[this.curQuestionIndex]['done'] = true;
        // if (this.questionArr[this.curQuestionIndex]['res']) {
        //     let simple = this.questionArr[this.curQuestionIndex]['res'];
        //     if (simple['childQuestionResult']) {
        //         simple['childQuestionResult'].forEach(child => {
        //             console.log(child);
        //             if (child['res']) {
        //                 let question = child['res'];
        //
        //                 this.http.post(ROOT_URL + 'simple/test/add', {
        //                     question_title_id: question['question']['question_bank_id'],
        //                     answer: question['userResult'].toString(),
        //                     istrue: question['isRight'] ? 1 : 0
        //                 }).subscribe(res => {
        //                     console.log(res);
        //                 });
        //             }
        //         });
        //     }
        //     if (simple['questionResult']) {
        //         let params = {
        //             token: localStorage.getItem('user_token'),
        //             simpleTest: {
        //                 question_id: this.questionArr[this.curQuestionIndex]['question_bank_id'],
        //                 answer: simple['questionResult']['userResult'].toString(),
        //                 istrue: simple['questionResult']['isRight'] ? 1 : 0
        //             }
        //         }
        //         this.http.post(ROOT_URL + 'simple/test/add', params).subscribe(res => {
        //             console.log(res);
        //         });
        //     }
        // }
        // // console.log(this.curQuestionIndex, this.examLength);
        // if (this.curQuestionIndex < this.questionLength) {
        //     this.curQuestionIndex++;
        //     // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        // }
    }

    scrollToNext() {
        if (this.curQuestionIndex < this.questionLength) {
            this.curQuestionIndex++;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    updateResult(event, i) {
        console.log(this.questionArr[i]['res'] = event);
        console.log(this.questionArr[i]);
    }

    async presentAlertConfirm(user, right) {
        const alert = await this.alertController.create({
            header: '做错了！',
            message: `你的答案：【${user}】</br>正确答案：【${right}】`,
            buttons: [
                // {
                //     text: 'Cancel',
                //     role: 'cancel',
                //     cssClass: 'secondary',
                //     handler: (blah) => {
                //         console.log('Confirm Cancel: blah');
                //     }
                // },
                {
                    text: '我知道了',
                    handler: () => {
                        // console.log('Confirm Okay');
                        // this.scrollToNext();
                    }
                }
            ]
        });

        await alert.present();
    }

    async presentSumAlertConfirm(err) {
        const alert = await this.alertController.create({
            header: '做错了！',
            message: `请注意页面错题：【${err}】`,
            buttons: [
                {
                    text: '我知道了',
                    handler: () => {
                        // console.log('Confirm Okay');
                        // this.scrollToNext();
                    }
                }
            ]
        });

        await alert.present();
    }
}
