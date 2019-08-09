import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-sub-question',
    templateUrl: './sub-question.component.html',
    styleUrls: ['./sub-question.component.scss'],
})
export class SubQuestionComponent implements OnInit {
    @Output() updateResult: EventEmitter<any> = new EventEmitter();
    @Input() questionId;
    question;
    answers;
    isRight;
    rightResult;
    userResult;
    showResult = false;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(ROOT_URL + 'question/detail?id=' + this.questionId).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                this.question = res['data']['detail'];
                this.answers = res['data']['answer'].map(item => {
                    item['isChecked'] = false;
                    return item;
                });

                if (localStorage.getItem(this.questionId)) {
                    // console.log(localStorage.getItem(this.questionId));
                    let storage = JSON.parse(localStorage.getItem(this.questionId));
                    // if (storage['question']) {
                    //     this.question = storage['question'];
                    // }
                    if (storage['answers']) {
                        this.answers = storage['answers'];
                    }
                }
            }
        });
    }

    checkChange() {
        // let tmp = this.answers.filter(item =>  {
        //     return item.isChecked === true;
        // });
        // console.log(tmp);
        this.checkResult();
    }

    checkResult() {
        let isRight = true;
        let rightResult = [];
        let userResult = [];
        this.answers.forEach(item => {
            if (item['isChecked']) {
                userResult.push(item['index_letter']);
            }
            if (item['result'] === 1) {
                rightResult.push(item['index_letter']);
            }
            // 答案项未选中 或者 选中项非答案 皆判错
            if ((item['result'] === 1 && !item['isChecked']) || (item['isChecked'] && item['result'] === 0)) {
                isRight = false;
            }
        });
        // console.log(isRight, userResult, rightResult);
        this.showResult = true;
        this.isRight = isRight;
        this.userResult = userResult;
        this.rightResult = rightResult;
        this.updateResult.emit({
            isRight: this.isRight,
            userResult: this.userResult,
            rightResult: this.rightResult,
            question: this.question
        });

        localStorage.setItem(this.questionId,JSON.stringify({
            answers: this.answers
        }));
    }

    radioSelect(e) {
        // console.log(e);
        let isRight = false;
        let rightResult = [];
        let userResult = [];
        userResult.push(e['index_letter']);
        if (e['result'] === 1) {
            isRight = true;
        }
        // this.answers.forEach(item => {
        //     if (item['result'] === 1) {
        //         rightResult.push(item['index_letter']);
        //     }
        // });
        this.answers.map(item => {
            if (e['index_number'] == item['index_number']) {
                item['isChecked'] = true;
            }else {
                item['isChecked'] = false;
            }
            if (item['result'] === 1) {
                rightResult.push(item['index_letter']);
            }
            return item;
        });
        // console.log(isRight, userResult, rightResult);
        this.showResult = true;
        this.isRight = isRight;
        this.userResult = userResult;
        this.rightResult = rightResult;

        this.updateResult.emit({
            isRight: this.isRight,
            userResult: this.userResult,
            rightResult: this.rightResult,
            question: this.question
        });

        localStorage.setItem(this.questionId,JSON.stringify({
            answers: this.answers
        }));
        // console.log(this.testRadio);
    }
}
