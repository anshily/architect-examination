import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.page.html',
  styleUrls: ['./sequence.page.scss'],
})
export class SequencePage implements OnInit {

    curQuestionIndex = 0;
    curQuestion;
    questionLength = 0;
    resultArr = [];
    questionArr = [];


    constructor(private http: HttpClient) { }

  ngOnInit() {
    // '/simple/test/orderQuestionTest'
    this.http.get(ROOT_URL + 'simple/test/orderQuestionTest?token=' + localStorage.getItem('user_token')).subscribe(res => {
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



    prevQuestion() {
        if (this.curQuestionIndex > 0) {
            this.curQuestionIndex--;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    nextQuestion() {
        if (this.questionArr[this.curQuestionIndex]['res']) {
            let simple = this.questionArr[this.curQuestionIndex]['res'];
            if (simple['childQuestionResult']) {
                simple['childQuestionResult'].forEach(child => {
                    // 同 res 結構
                    // difficulty_degree: 1
                    // explanation: ""
                    // isclose: 0
                    // isdelete: 0
                    // name: ""
                    // parent_id: 45089
                    // question_bank_category_id: 0
                    // question_bank_id: 45093
                    // question_title: "<p>4、本起事故的主要原因是女工唐某违规操作。</p>"
                    // question_type_id: 3
                    // res:
                    //     isRight: false
                    // question:
                    //     difficulty_degree: 1
                    // explanation: ""
                    // isclose: 0
                    // isdelete: 0
                    // name: ""
                    // parent_id: 45089
                    // question_bank_category_id: 0
                    // question_bank_id: 45093
                    // question_title: "<p>4、本起事故的主要原因是女工唐某违规操作。</p>"
                    // question_type_id: 3
                    // __proto__: Object
                    // rightResult: ["B"]
                    // userResult: ["A"]
                    console.log(child);
                    if (child['res']) {
                        let question = child['res'];

                        this.http.post(ROOT_URL + 'simple/test/add', {
                            question_title_id: question['question']['question_bank_id'],
                            answer: question['userResult'].toString(),
                            istrue: question['isRight'] ? 1 : 0
                        }).subscribe(res => {
                            console.log(res);
                        });
                    }
                });
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
            }
        }
        // console.log(this.curQuestionIndex, this.examLength);
        if (this.curQuestionIndex < this.questionLength) {
            this.curQuestionIndex++;
            // this.curQuestion = this.examArr.slice(this.curQuestionIndex, this.curQuestionIndex + 1).pop();
        }
    }

    updateResult(event, i) {
        console.log(this.questionArr[i]['res'] = event);
        console.log(this.questionArr[i]);
    }
}
