import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulate-exam',
  templateUrl: './simulate-exam.component.html',
  styleUrls: ['./simulate-exam.component.scss'],
})
export class SimulateExamComponent implements OnInit {
  infoTime = '79题 90分钟';
  infoDescribe = '满分124分/及格75分';

  constructor() { }

  ngOnInit() {
    if ( localStorage.getItem('user_category')
        && parseInt(localStorage.getItem('user_category')) >= 15
        && parseInt(localStorage.getItem('user_category')) <= 25) {
      this.infoTime = '75题 90分钟';
      this.infoDescribe = '满分100分/及格60分';
    }
  }

}
