import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.page.html',
    styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
    examId;
    examArr = [];
    curQuestion;
    curQuestionIndex = 69;
    examLength = 0;
    resultArr = [];
    materialResultArr = [];
    constructor(private router: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.router.queryParams.subscribe(qp => {
            console.log(qp);
            this.examId = qp['eid'];
            let params = {
                token: localStorage.getItem('user_token'),
                examid: qp['eid']
            }
            this.http.get(ROOT_URL + 'question/title/getQuestionTitleByExamid', {params: params}).subscribe(res => {
                console.log(res);
                if (res['code'] == 0) {
                    this.examArr = res['data'];
                    if (this.examArr.length > 0){
                        this.examLength = this.examArr.length;
                        this.curQuestion = this.examArr.slice(0,1).pop();
                    }
                    // console.log(this.examArr.slice(1,2).pop());
                    console.log(this.examArr);
                }
            });
        });
    }

    prevQuestion() {
        if (this.curQuestionIndex > 0) {
            this.curQuestionIndex--;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    nextQuestion() {
        console.log(this.curQuestionIndex, this.examLength);
        if (this.curQuestionIndex < this.examLength) {
            this.curQuestionIndex++;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    updateResult(event, i) {
        console.log(this.examArr[i]['res'] = event);
        console.log(this.examArr[i]);
    }

    submitResult() {
        this.examArr.map(item => {
            if (item['res']) {
                console.log(item['res']);
                if (item['res']['questionResult']) {
                    let question  =  item['res']['questionResult'];
                    this.resultArr.push({
                        examid: this.examId,
                        question_title_id: question['question']['question_bank_id'],
                        answer: question['userResult'],
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
                            this.materialResultArr.push({
                                examid: this.examId,
                                question_title_id: question['question']['question_bank_id'],
                                answer: question['userResult'],
                                istrue: question['isRight'] ? 1 : 0
                            });
                        }
                    });
                }
            }
        });
        console.log(this.materialResultArr);
        console.log(this.resultArr);
    }

}
