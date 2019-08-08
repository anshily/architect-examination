import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.page.html',
  styleUrls: ['./sequence.page.scss'],
})
export class SequencePage implements OnInit {

  questionArr = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(ROOT_URL + 'question/list').subscribe(res => {
      console.log(res);
      if (res['code'] == 0){
        this.questionArr = res['data']['list'];
      }
    });
  }

}
