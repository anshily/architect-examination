import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-wrong-detail',
  templateUrl: './wrong-detail.component.html',
  styleUrls: ['./wrong-detail.component.scss'],
})
export class WrongDetailComponent implements OnInit {

  @Input() questionId;
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
// index_letter: "A"
// index_number: 0
// isChecked: false
// name: "1998年"
// question_bank_id: 43109
// question_item_id: 160848
// result: 1