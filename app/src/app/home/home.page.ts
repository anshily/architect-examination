import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
                public route: ActivatedRoute,
                private router: Router,
                public http: HttpClient,
                private navController: NavController,
                public toastController: ToastController) {
    }


    ngOnInit(): void {
        this.http.get(ROOT_URL + 'user/userInfo?token=e4487ba4-7016-4cea-b016-8f7de9aa8779').subscribe(res => {
            console.log(res);
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
