import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-do-wrong',
    templateUrl: './do-wrong.page.html',
    styleUrls: ['./do-wrong.page.scss'],
})
export class DoWrongPage implements OnInit {

    wrongArr = [];

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.http.get(ROOT_URL + 'simple/test/simpleTestErrRate?token=' + localStorage.getItem('user_token')).subscribe(res => {
            console.log(res);
            if (res['code'] == 0){
                this.wrongArr = res['data']['SimpleTestErrRate'];
            }
        });
    }

    goDetail(e) {
        console.log(e);
        this.router.navigate(['/question-detail'], {queryParams: {qid: e.id}}).then();
    }

}
