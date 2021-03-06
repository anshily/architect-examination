import { Component, OnInit } from '@angular/core';
import {CommonStorageService} from '../common-storage.service';
import {AlertController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-random-practicing',
  templateUrl: './random-practicing.page.html',
  styleUrls: ['./random-practicing.page.scss'],
})
export class RandomPracticingPage implements OnInit {

    type;
    questionArr = [];
    questionLength = 0;
    curQuestion;
    curQuestionIndex = 0;

    constructor(private route: ActivatedRoute, private http: HttpClient, public alertController: AlertController,
                private commonStorage: CommonStorageService) {
    }

    ngOnInit() {
        localStorage.setItem('random-tmp', '{}');
        // this.route.queryParams.subscribe(qp => {
        //     console.log(qp);
        //     this.type = qp['type'];
            this.http.get(ROOT_URL + 'simple/test/simpleQuestionTest?token=' + localStorage.getItem('user_token'))
                .subscribe(res => {
                console.log(res);
                if (res['code'] == 0) {
                    this.questionArr = res['data']['title'];

                    if (this.questionArr.length > 0) {
                        this.questionLength = this.questionArr.length;
                        this.curQuestion = this.questionArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
                    }
                }
            });
        // });
    }

    prevQuestion() {
        if (this.curQuestionIndex > 0) {
            this.curQuestionIndex--;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    nextQuestion() {
        console.log(this.questionArr[this.curQuestionIndex]['done']);
        // 已提交
        if (this.questionArr[this.curQuestionIndex]['done'] && this.questionArr[this.curQuestionIndex]['done'] == 1) {
            this.scrollToNext();
        }else {
            console.log(this.questionArr[this.curQuestionIndex]);
            // 从子组件中发出判题结果 判断该题正误 若错误弹出提示
            if (this.questionArr[this.curQuestionIndex]['res']) {
                let simple = this.questionArr[this.curQuestionIndex]['res'];
                if (simple['childQuestionResult']) {
                    // sumStatus
                    this.questionArr[this.curQuestionIndex]['sumStatus'] = 1;
                    let wrong = false;
                    simple['childQuestionResult'].forEach(child => {
                        if (child['res'] && child['res']['questionResult']) {
                            let question = child['res']['questionResult'];
                            if (!question['isRight']){
                                wrong = true;
                            }
                            console.log(child);
                            this.http.post(ROOT_URL + 'simple/test/add', {
                                token: localStorage.getItem('user_token'),
                                simpleTest: {
                                    question_id: question['question']['question_bank_id'],
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
                    if (!simple['questionResult']['isRight']) {
                        this.presentAlertConfirm(simple['questionResult']['userResult'].toString(),
                            simple['questionResult']['rightResult'].toString());
                    }else {
                        this.scrollToNext();
                        return;
                    }
                }
            } else {
                this.scrollToNext();
                return;
            }
            this.questionArr[this.curQuestionIndex]['done'] = 1;
        }
    }

    scrollToNext() {
        if (this.curQuestionIndex < this.questionLength) {
            this.curQuestionIndex++;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    updateResult(event, i) {
        console.log(event, i);
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
