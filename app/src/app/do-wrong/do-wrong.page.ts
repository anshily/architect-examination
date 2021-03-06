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
    pageNum = 1;
    total = 0;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        // this.http.post(ROOT_URL + 'simple/test/simpleTestErrRate', {
        //     token: localStorage.getItem('user_token'),
        //         pageSize: 50,
        //         pageNum: 1
        //     }).subscribe(res => {
        //     console.log(res);
        //     if (res['code'] == 0){
        //         // this.wrongArr = res['data']['SimpleTestErrRate'];
        //     }
        // });
        this.loopFetch().then();
    }
    async loopFetch() {
        for (let i = 0; i < this.total / 5 + 1; i++) {
            await this.appendData(i + 1).then(res => {

                this.wrongArr = this.wrongArr.concat(res);
                // res.forEach(item => {
                //     this.wrongArr.push(item);
                // });
                // this.wrongArr = [...this.wrongArr, ...tmp];
            });
        }
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

        return new Promise((resolve, reject) => {

            this.http.post(ROOT_URL + 'simple/test/simpleTestErrRate', {
                token: localStorage.getItem('user_token'),
                pageSize: 5,
                pageNum: num
            }).subscribe(res => {
                // console.log(res);
                if (res['code'] == 0){

                    resolve(res['data']['SimpleTestErrRate']);
                    // console.log(res['data']['errSum']);
                    this.total = res['data']['errSum'];
                    // this.wrongArr = [...this.wrongArr, res['data']['SimpleTestErrRate']];
                }else {
                    reject('执行失败');
                }
            });
        });
    }
}
