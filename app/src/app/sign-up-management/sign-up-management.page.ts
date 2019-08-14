import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-sign-up-management',
    templateUrl: './sign-up-management.page.html',
    styleUrls: ['./sign-up-management.page.scss'],
})
export class SignUpManagementPage implements OnInit {

    searchValue;
    users = [];
    workType = 1;

    constructor(private http: HttpClient,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        this.http.post(ROOT_URL + 'sign/up/getSignUpMessage', {
            pageNum: 1,
            pageSize: 10,
            statu: 1
        }).subscribe(res => {
            console.log(res)
            if (res['code'] == 0) {
                this.users = res['data'];
            }
        });
    }


    goDetail(u) {
        console.log(u);
        this.navCtrl.navigateForward('/sign-up-detail', {
            queryParams: {
                uid: u.id
            }
        }).then();
    }

    search() {

    }

    loadData(event) {
        setTimeout(() => {
            console.log(event);
            event.target.complete();
            //
            //     // App logic to determine if all data is loaded
            //     // and disable the infinite scroll
            //     if (data.length == 1000) {
            //         event.target.disabled = true;
            //     }
        }, 500);
    }

}
