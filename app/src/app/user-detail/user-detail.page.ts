import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TimeService} from '../time.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.page.html',
    styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

    uid;
    user;
    userDate;

    constructor(private router: ActivatedRoute, private http: HttpClient, private timeService: TimeService) {
    }

    ngOnInit() {
        this.router.queryParams.subscribe(qp => {
            this.uid = qp.uid;
            this.getUserInfo();
        });
    }

    getUserInfo() {
        this.http.get(ROOT_URL + 'user/detail?id=' + this.uid).subscribe(res => {
            console.log(res);
            if (res['code'] == 0) {
                this.user = res['data'];

                if (this.user['update_time']) {
                    let tmp = new Date(this.user['update_time']).getTime();
                    this.user['update_time'] = this.timeService.formatDateTime(tmp);
                }
            }
        });

        this.http.get(ROOT_URL + 'user/getStudyTime?userid=' + this.uid).subscribe(res => {
            console.log(res);
            if (res['code'] == 0) {
                // console.log(new Date(res['data']['ExamStartTime']).getTime());
                this.userDate = res['data'];

                if (this.userDate['ExamStartTime'] && this.userDate['ExamStartTime']['createtime']) {
                    this.userDate['ExamStartTime'] =
                        this.timeService.formatDateTime(new Date(this.userDate['ExamStartTime']['createtime']).getTime());
                }

                if (this.userDate['SimpleTestTime'] && this.userDate['SimpleTestTime']['add_time']) {
                    this.userDate['SimpleTestTime'] =
                        this.timeService.formatDateTime(new Date(this.userDate['SimpleTestTime']['add_time']).getTime());
                }
            }
        });
    }

    forbid() {
        this.http.get(ROOT_URL + 'user/deleteUser?userid=' + this.uid).subscribe(res => {
           if (res['code'] == 0){
               confirm('删除成功！');
           }
        });
    }
}
