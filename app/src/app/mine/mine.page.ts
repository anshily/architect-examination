import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {TimeService} from '../time.service';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.page.html',
    styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {
    userInfo;
    lastLoginTime;
    constructor(private navCtrl: NavController, private http: HttpClient,
                private timeService: TimeService) {
    }

    ngOnInit() {
        this.http.get(ROOT_URL + 'user/userInfo?token=' + localStorage.getItem('user_token')).subscribe(res => {
            console.log(res);
            if (res['code'] == 0) {
                this.userInfo = res['data'];
                if (this.userInfo['update_time']) {
                    let tmp = new Date(this.userInfo['update_time']).getTime();
                    this.lastLoginTime = this.timeService.formatDateTime(tmp);
                }
            }
        });
    }

    goAlterPassword() {
        this.navCtrl.navigateForward('/alter-password').then();
    }

    logout() {
        localStorage.clear();
        this.navCtrl.navigateForward('/login').then();
    }
}
