import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, NavController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

    segmentValue;
    companyName;
    workType;
    public name: any;
    public phone: any;
    public subscribe: any;

    constructor(private http: HttpClient, private router: Router, public toastController: ToastController,
                private navCtrl: NavController, public alertController: AlertController) {
    }

    ngOnInit() {
    }

    segmentChanged(e) {
        // console.log(e);
        this.segmentValue = e['detail']['value'];
    }

    // 报名
    submit() {
        if (!this.phone || !this.workType) {
            this.presentToast('请将信息填写完整！').then();
            return;
        }
        const params = {
            company_name: this.companyName,
            work_type: this.workType,
            name: this.name,
            phone: this.phone,
            subscribe: this.subscribe
        };
        console.log(params);

        this.http.post(ROOT_URL + 'sign/up/add', params).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                console.log(res, '报名成功');
                this.presentSumAlertConfirm().then();
            }
            else {
                this.presentToast(res['msg']);
            }
        }, (err) => {
            console.log(err);
            this.presentToast(err['error']['msg']).then(r => {
                console.log(r);
            });
        });

    }


    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    navBack() {
        this.navCtrl.pop().then();
    }


    async presentSumAlertConfirm() {
        const alert = await this.alertController.create({
            header: '报名成功',
            // message: `请注意页面错题：【${err}】`,
            buttons: [
                {
                    text: '我知道了',
                    handler: () => {
                        this.navCtrl.pop().then();
                        // console.log('Confirm Okay');
                        // this.scrollToNext();
                    }
                }
            ]
        });

        await alert.present();
    }
}
