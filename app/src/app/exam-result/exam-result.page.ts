import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TimeService} from '../time.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.page.html',
  styleUrls: ['./exam-result.page.scss'],
})
export class ExamResultPage implements OnInit {

  examId;
  examMessage;
  startTime;
  endTime;
  grade;

  constructor(private router: ActivatedRoute, private http: HttpClient, private timeService: TimeService, private navController: NavController) { }

  ngOnInit() {
      this.router.queryParams.subscribe(qp => {
        console.log(qp);
        this.examId = qp['eid'];
        this.getExamResult(qp['eid']);
      });
  }

  getExamResult(id){
      this.http.get(ROOT_URL + 'exam/message/detail?id=' + id).subscribe(res => {
        console.log(res);
        if (res['code'] == 0) {
          let startTimeTmp = new Date(res['data']['createtime']).getTime();
          this.startTime = this.timeService.formatDateTime(startTimeTmp);
          this.endTime = this.timeService.formatDateTime(`${parseInt(startTimeTmp) + 90 * 60 * 1000}`);
          this.grade = res['data']['grade'];
        }
      });
  }

    showExamWrongQuestion() {
        this.navController.navigateForward('/exam-review', {queryParams: {eid: this.examId}}).then();
    }

    // add_time: "2019-08-12T00:31:22.000+0000"
    // createtime: "2019-08-11T02:45:39.000+0000"
    // endtime: null
    // grade: 2
    // id: 45
    // statu: 2
    // userid: 9
}
