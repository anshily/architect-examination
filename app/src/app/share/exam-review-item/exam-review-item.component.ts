import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-exam-review-item',
  templateUrl: './exam-review-item.component.html',
  styleUrls: ['./exam-review-item.component.scss'],
})
export class ExamReviewItemComponent implements OnInit {


    @Input() questionId;
    @Input() userResult;
    question;
    answers;
    rightResult = [];
    constructor(private http: HttpClient) { }

    ngOnInit() {

        this.http.get(ROOT_URL + 'question/detail?id=' + this.questionId).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                this.question = res['data']['detail'];
                this.answers = res['data']['answer'].map(item => {
                    item['isChecked'] = false;
                    if (item['result'] == 1){
                        this.rightResult.push(item['index_letter']);
                    }
                    return item;
                });
            }
        });
    }
}
