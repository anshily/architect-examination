import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-random-sum-question',
  templateUrl: './random-sum-question.component.html',
  styleUrls: ['./random-sum-question.component.scss'],
})
export class RandomSumQuestionComponent implements OnInit {


    @Output() updateResult: EventEmitter<any> = new EventEmitter();
    @Input() questionId;
    @Input() status;
    answers;
    question;
    subQuestion;
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get(ROOT_URL + 'question/detail?id=' + this.questionId).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                this.question = res['data']['detail'];
                this.answers = res['data']['answer'].map(item => {
                    item['isChecked'] = false;
                    return item;
                });
                this.subQuestion = res['data']['subQuestion'];
            }
        });
    }

    testSubEmit(e,i) {
        console.log(e);
        this.subQuestion[i]['res'] = e;
        this.updateResult.emit(this.subQuestion);
    }

}
