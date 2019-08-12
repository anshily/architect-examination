import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

    examArr = [];

  constructor(private http: HttpClient, private navController: NavController) { }

  ngOnInit() {
      let params = {
          token: localStorage.getItem('user_token')
      }
      this.http.get(ROOT_URL + '/exam/message/getAllExam', {
          params: params
      }).subscribe(res => {
          console.log(res);
          if (res['code'] == 0){
              this.examArr = res['data'];
          }
      });
  }

    goExam(v) {
        console.log(v);
        this.navController.navigateForward('/exam-result', {queryParams: {eid: v}}).then();

        // this.navController.navigateForward('/exam',{queryParams: {eid: v}}).then();
    }

}
