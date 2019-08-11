import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SequenceStorageService} from '../../sequence-storage.service';

@Component({
  selector: 'app-sequence-question',
  templateUrl: './sequence-question.component.html',
  styleUrls: ['./sequence-question.component.scss'],
})
export class SequenceQuestionComponent implements OnInit {
    @Output() updateResult: EventEmitter<any> = new EventEmitter();
    @Input() questionId;
    innerQuestionId;
    question;
    answers;
    isRight;
    rightResult;
    userResult;
    showResult = false;

    constructor(private http: HttpClient, private router: ActivatedRoute, private sequenceStorage: SequenceStorageService) {
    }

    ngOnInit() {
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
                if (this.sequenceStorage.getItem(this.questionId)){
                    let storage = this.sequenceStorage.getItem(this.questionId);
                    if (storage['answers']) {
                        this.answers = storage['answers'];
                    }
                }
                // if (localStorage.getItem('random-question')) {
                //     // console.log(localStorage.getItem(this.questionId));
                //     let storage = JSON.parse(localStorage.getItem('random-question'));
                //     if (storage['answers']) {
                //         this.answers = storage['answers'];
                //     }
                // }
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
        // this.updateResult.emit();

        this.updateResult.emit({
            questionResult: {
                isRight: this.isRight,
                userResult: this.userResult,
                rightResult: this.rightResult,
                question: this.question
            }
        });
        // localStorage.setItem('random-question', JSON.stringify({
        //     answers: this.answers
        // }));
        this.sequenceStorage.setItem(this.questionId, {
            answers: this.answers
        });
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

        let subResult = {
            isRight: this.isRight,
            userResult: this.userResult,
            rightResult: this.rightResult,
            question: this.question
        }
        this.updateResult.emit({
            questionResult: subResult
        });

        this.sequenceStorage.setItem(this.questionId, {
            answers: this.answers
        });
        // console.log(this.testRadio);
        // localStorage.setItem('random-question', JSON.stringify({
        //     answers: this.answers
        // }));
    }
    paraEmit(e) {
        this.updateResult.emit({
            childQuestionResult: e
        });
    }

}
