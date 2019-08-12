import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exam-review',
  templateUrl: './exam-review.page.html',
  styleUrls: ['./exam-review.page.scss'],
})
export class ExamReviewPage implements OnInit {

    examArr = [];
    curQuestion;
    curQuestionIndex = 0;
    examLength = 0;
    examId;

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

      this.router.queryParams.subscribe(qp => {
          console.log(qp);
          this.examId = qp['eid'];
          let params = {
              token: localStorage.getItem('user_token'),
              examid: qp['eid']
          }
          this.http.get(ROOT_URL + 'exam/answer/getExamErr', {params: params}).subscribe(res => {
              console.log(res);
              if (res['code'] == 0) {
                  this.examArr = res['data'];
                  if (this.examArr.length > 0){
                      this.examLength = this.examArr.length;
                      this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
                  }
                  // console.log(this.examArr.slice(1,2).pop());
                  // console.log(this.examArr);
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
        // console.log(this.curQuestionIndex, this.examLength);
        if (this.curQuestionIndex + 1 < this.examLength) {
            this.curQuestionIndex++;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

}
