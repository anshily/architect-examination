import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, NavController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {TimeService} from '../time.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    examArr = [];

    constructor(
                public route: ActivatedRoute,
                private router: Router,
                public http: HttpClient,
                private navController: NavController,
                public toastController: ToastController,
                public actionSheetController: ActionSheetController) {
    }


    ngOnInit(): void {

        // console.log(localStorage.getItem('user_category'));

        if (localStorage.getItem('user_category') && localStorage.getItem('user_category') == '1') {
            console.log(localStorage.getItem('user_category'));
            this.router.navigate(['/admin-menu']).then();
        }
        let params = {
            token: localStorage.getItem('user_token')
        }
        this.http.get(ROOT_URL + '/exam/message/getAllExam', {
            params: params
        }).subscribe(res => {
            console.log(res);
            if (res['code'] == 0){
                if (res['data'] && res['data'].length > 2) {
                    this.examArr = res['data'].slice(0, 2);
                } else {
                    this.examArr = res['data'];
                }
            }
        });
    }

    navTo(url) {
        this.navController.navigateForward(url ? url : '/home').then(
            () => {
                console.log(url);
            }
        );
    }

    goExam(v) {

        let isOverTime = 0;
        let createTime = new Date(v['createtime']).getTime();
        // console.log(this.startTime);
        let curTime = new Date();
        // console.log(curTime.getTime());
        if (curTime.getTime() > createTime + 90 * 60 * 1000) {
            // console.log('已過期！');
            isOverTime = 1;
        }
        console.log(v);
        if (v['statu'] == 1 && isOverTime == 0) {
            // this.navController.navigateForward('/exam', {queryParams: {eid: v['id']}}).then();
            this.presentSequenceActionSheet(v['id']).then();
        } else {
            this.navController.navigateForward('/exam-result', {queryParams: {eid: v['id']}}).then();
        }
    }

    async presentSequenceActionSheet(id) {
        const actionSheet = await this.actionSheetController.create({
            buttons: [{
                text: '继续答题',
                handler: () => {
                    this.navController.navigateForward('/sw-exam', {queryParams: {eid: id}}).then();
                }
            }, {
                text: '重新开始',
                handler: () => {
                    // localStorage.getItem('sequence-random-magic');
                    localStorage.setItem('exam' + id, '{}');
                    this.navController.navigateForward('/sw-exam', {queryParams: {eid: id}}).then();
                }
            }, {
                text: '取消',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }
}
