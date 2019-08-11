import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.page.html',
  styleUrls: ['./question-detail.page.scss'],
})
export class QuestionDetailPage implements OnInit {
    questionId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(qp => {
      console.log(qp.qid);
      this.questionId = qp.qid;
    });
  }

}
