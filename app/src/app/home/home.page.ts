import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
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
                public toastController: ToastController) {
    }


    ngOnInit(): void {
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
        console.log(v);
        this.navController.navigateForward('/exam',{queryParams: {eid: v}}).then();
    }
}
