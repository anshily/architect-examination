import {Component, Input, OnInit} from '@angular/core';
import {TimeService} from '../../time.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {

  @Input() createTime;
  startTime;
  endTime;
  status = 0;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    // console.log(this.createTime);
    // console.log(new Date(this.createTime).getTime());
    this.createTime = new Date(this.createTime).getTime()
    this.startTime = this.timeService.formatDateTime(this.createTime);
    this.endTime = this.timeService.formatDateTime(parseInt(this.createTime) + 90 * 60 * 1000);
    console.log(this.startTime);
    let curTime = new Date();
    console.log(curTime.getTime());
    if (curTime.getTime() > parseInt(this.createTime) + 90 * 60 * 1000) {
      console.log('已過期！');
      this.status = 1;
    }
  }

}
