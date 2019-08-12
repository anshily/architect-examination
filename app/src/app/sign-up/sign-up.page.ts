import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

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
    public email: any;
    public password: any;
    public confirmPassword: any;

    constructor(private http: HttpClient, private router: Router, public toastController: ToastController) {
    }

    ngOnInit() {
    }

    segmentChanged(e) {
        // console.log(e);
        this.segmentValue = e['detail']['value'];
    }

    // 报名
    submit() {
        if (!this.name || !this.email) {
            console.log('帐号/密码不能为空');
            this.presentToast('帐号/密码不能为空').then();
            return;
        }
        const params = {
            company_name: this.companyName,
            work_type: this.workType,
            name: this.password,
            phone: this.confirmPassword,
            subscribe: ''
        };
        console.log(params);

        this.loading = true;
        this.http.post(ROOT_URL + 'register', params).subscribe(res => {
            console.log(res);
            if (res['code'] === 200) {
                console.log(res, '注册成功');
                setTimeout(() => {
                    this.router.navigate(['/login']).then(res => {
                        console.log(res);
                    });
                    this.loading = false;
                }, 800);
            }
            else {
                this.loading = false;
                this.presentToast(res['msg']);
            }
        }, (err) => {
            this.loading = false;
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
}
