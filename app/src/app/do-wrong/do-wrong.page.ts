import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/src/internal/Observable';

@Component({
    selector: 'app-do-wrong',
    templateUrl: './do-wrong.page.html',
    styleUrls: ['./do-wrong.page.scss'],
})
export class DoWrongPage implements OnInit {

    wrongArr = [];
    pageNum = 1;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.http.post(ROOT_URL + 'simple/test/simpleTestErrRate', {
            token: localStorage.getItem('user_token'),
                pageSize: 10,
                pageNum: 1
            }).subscribe(res => {
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
    appendData(num) {

        return Observable.create((sub) => {

        });
        this.http.post(ROOT_URL + 'simple/test/simpleTestErrRate', {
            token: localStorage.getItem('user_token'),
            pageSize: 10,
            pageNum: num
        }).subscribe(res => {
            console.log(res);
            if (res['code'] == 0){
                this.wrongArr = [...this.wrongArr, res['data']['SimpleTestErrRate']];
            }
        });
    }
}
