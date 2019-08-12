import {Component, Input, OnInit} from '@angular/core';
import {TimeService} from '../../time.service';

@Component({
  selector: 'app-exam-history-item',
  templateUrl: './exam-history-item.component.html',
  styleUrls: ['./exam-history-item.component.scss'],
})
export class ExamHistoryItemComponent implements OnInit {

    @Input() createTime;
    @Input() grade;

    startTime;
    endTime;

    constructor(private timeService: TimeService) { }

    ngOnInit() {
        // console.log(this.createTime);
        // console.log(new Date(this.createTime).getTime());
        this.createTime = new Date(this.createTime).getTime();
        this.startTime = this.timeService.formatDateTime(this.createTime);
        this.endTime = this.timeService.formatDateTime(parseInt(this.createTime) + 90 * 60 * 1000);
        // console.log(this.startTime);
        let curTime = new Date();
        // console.log(curTime.getTime());
        if (curTime.getTime() > parseInt(this.createTime) + 90 * 60 * 1000) {
            // console.log('已過期！');
            this.status = 1;
        }
    }

}
