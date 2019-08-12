import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-practicing',
    templateUrl: './practicing.page.html',
    styleUrls: ['./practicing.page.scss'],
})
export class PracticingPage implements OnInit {

    constructor(private navController: NavController, private http: HttpClient,
                public loadingController: LoadingController) {
    }

    ngOnInit() {
    }

    startSimulate() {
        this.presentLoading().then();
        this.http.get(ROOT_URL + '/exam/message/createExam?token=' + localStorage.getItem('user_token')).subscribe(res => {
            console.log(res);
            if (res['code'] == 0) {
                let examId = res['data']['examMessage']['id'];
                this.navController.navigateForward('/exam', {queryParams: {eid: examId}}).then();
            }
        });
    }

    startSequence() {
        this.presentPracticingLoading().then();
        this.navController.navigateForward('/sequence').then();
    }


    startRandom() {
        this.presentPracticingLoading().then();
        this.navController.navigateForward('/random').then();
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: '試卷生成中...',
            duration: 1000
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }

    async presentPracticingLoading() {
        const loading = await this.loadingController.create({
            // message: '試卷生成中...',
            duration: 1000
        });
        await loading.present();

        const {role, data} = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }
}
