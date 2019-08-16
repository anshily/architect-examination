import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sum-question',
  templateUrl: './sum-question.component.html',
  styleUrls: ['./sum-question.component.scss'],
})
export class SumQuestionComponent implements OnInit {

    @Output() updateResult: EventEmitter<any> = new EventEmitter();
    @Input() questionId;
    @Input() status;
    @Input() storageKey;
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
