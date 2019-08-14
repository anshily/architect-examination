import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

    radioValue;
    checkBoxValue;
    isChecked;
    @Output() updateResult: EventEmitter<any> = new EventEmitter();
    @Input() questionId;
    innerQuestionId;
    question;
    answers;
    isRight;
    rightResult;
    userResult;
    showResult = false;
    examId;

    constructor(private http: HttpClient, private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.queryParams.subscribe(qp => {
            console.log(qp);
            this.examId = qp.eid;
        });
    }

    ngOnChanges() {
        // console.log(this.questionId);
        // this.innerQuestionId = this.questionId;
        this.http.get(ROOT_URL + 'question/detail?id=' + this.questionId).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                this.question = res['data']['detail'];
                this.answers = res['data']['answer'].map(item => {
                    item['isChecked'] = false;
                    return item;
                });

                if (localStorage.getItem('exam' + this.examId + 'question' + this.questionId)) {
                    // console.log(localStorage.getItem(this.questionId));
                    let storage = JSON.parse(localStorage.getItem('exam' + this.examId + 'question' + this.questionId));
                    // if (storage['question']) {
                    //     this.question = storage['question'];
                    // }
                    if (storage['answers']) {
                        this.answers = storage['answers'];
                    }
                }
                // localStorage.setItem(this.questionId,JSON.stringify({
                //     answers: this.answers
                // }));
            }
        });
    }

    checkChange() {
        // console.log('emit');
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
        localStorage.setItem('exam' + this.examId + 'question' + this.questionId, JSON.stringify({
            answers: this.answers
        }));
    }

    radioSelect(e) {
        // console.log(this.radioModel);
        // this.radioModel = e['index_number'];
        console.log(e);
        let isRight = false;
        let rightResult = [];
        let userResult = [];
        userResult.push(e['index_letter']);
        if (e['result'] === 1) {
            isRight = true;
        }
        this.answers.map(item => {
            if (e['index_number'] == item['index_number']) {
                item['isChecked'] = true;
            } else {
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

        let subResult = {
            isRight: this.isRight,
            userResult: this.userResult,
            rightResult: this.rightResult,
            question: this.question
        }
        this.updateResult.emit({
            questionResult: subResult
        });
        // console.log(this.testRadio);
        localStorage.setItem('exam' + this.examId + 'question' + this.questionId, JSON.stringify({
            answers: this.answers
        }));
    }

    paraEmit(e) {
        this.updateResult.emit({
            childQuestionResult: e
        });
    }

    radioChange(e) {
        console.log(e);
        console.log(this.radioValue);
        let isRight = false;
        let rightResult = [];
        let userResult = [];
        userResult.push(e['index_letter']);
        if (e['result'] === 1) {
            isRight = true;
        }

        this.answers.map(item => {
            if (e['index_number'] == item['index_number']) {
                item['isChecked'] = true;
            } else {
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

        let subResult = {
            isRight: this.isRight,
            userResult: this.userResult,
            rightResult: this.rightResult,
            question: this.question
        }
        this.updateResult.emit({
            questionResult: subResult
        });
        // console.log(this.testRadio);
        localStorage.setItem('exam' + this.examId + 'question' + this.questionId, JSON.stringify({
            answers: this.answers
        }));
    }
}
