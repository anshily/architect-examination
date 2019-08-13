import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {RandomStorageService} from '../random-storage.service';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-random',
    templateUrl: './random.page.html',
    styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
    examId;
    examArr = [];
    curQuestion;
    curQuestionIndex = 0;
    questionLength = 0;
    resultArr = [];
    questionArr = [];

    constructor(private router: ActivatedRoute, private http: HttpClient, private randomStorage: RandomStorageService,
                public alertController: AlertController) {
    }

    ngOnInit() {
        this.randomStorage.clearRandomStorage();
        this.http.get(ROOT_URL + 'simple/test/simpleQuestionTest?token=' + localStorage.getItem('user_token')).subscribe(res => {
            console.log(res);
            if (res['code'] == 0){
                this.questionArr = res['data']['title'];

                if (this.questionArr.length > 0) {
                    this.questionLength = this.questionArr.length;
                    this.curQuestion = this.questionArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
                }
            }
        });
    }

    // ngOnDestroy() {
    //     console.log('destroy!');
    //     let storge = {
    //         curQuestionIndex: this.curQuestionIndex,
    //         examArr: this.examArr
    //     }
    //     localStorage.setItem('exam' + this.examId, JSON.stringify(storge));
    // }

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
        console.log(this.questionArr[i]['res'] = event);
        console.log(this.questionArr[i]);
    }

    submitResult() {
        this.questionArr.map(item => {
            if (item['res']) {
                console.log(item['res']);
                if (item['res']['questionResult']) {
                    let question = item['res']['questionResult'];
                    this.resultArr.push({
                        examid: this.examId,
                        question_title_id: question['question']['question_bank_id'],
                        answer: question['userResult'].toString(),
                        istrue: question['isRight'] ? 1 : 0
                    })

                    // res 結構
                    // isRight: true
                    // question: {difficulty_degree: 1, explanation: "无解析", isclose: 0, isdelete: 0, name: "A类（企业负责人）", …}
                    // rightResult: ["A"]
                    // userResult: ["A"]
                }
                if (item['res']['childQuestionResult']) {
                    item['res']['childQuestionResult'].forEach(child => {
                        // 同 res 結構
                        // console.log(child);
                        if (child['res']) {
                            let question = child['res'];
                            this.resultArr.push({
                                examid: this.examId,
                                question_title_id: question['question']['question_bank_id'],
                                answer: question['userResult'].toString(),
                                istrue: question['isRight'] ? 1 : 0
                            });
                        }
                    });
                }
            }
        });
        // console.log(this.materialResultArr);
        console.log(this.resultArr);

        let params = {
            token: localStorage.getItem('user_token'),
            examAnswers: this.resultArr
        }

        console.log(params);

        this.http.post(ROOT_URL + 'exam/answer/examAnswerArr', params).subscribe(res => {
            console.log(res);
            if (res['code'] == 0) {
                console.log('提交成功');
            }
        });
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
