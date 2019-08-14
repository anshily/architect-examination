import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-sign-up-detail',
    templateUrl: './sign-up-detail.page.html',
    styleUrls: ['./sign-up-detail.page.scss'],
})
export class SignUpDetailPage implements OnInit {

    uid;
    user;

    constructor(private router: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.router.queryParams.subscribe(qp => {
            this.uid = qp.uid;
            this.getUserInfo();
        });
    }

    getUserInfo() {
        this.http.get(ROOT_URL + 'sign/up/detail?id=' + this.uid).subscribe(res => {
            console.log(res);
            if (res['code'] == 0) {
                this.user = res['data'];
            }
        });
    }

    read() {

    }

}
