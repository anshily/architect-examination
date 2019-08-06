import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alter-password',
  templateUrl: './alter-password.page.html',
  styleUrls: ['./alter-password.page.scss'],
})
export class AlterPasswordPage implements OnInit {
    public oldPassword: any;
    public password: any;
    public confirmPassword: any;
    public loading = false;

    constructor( private http: HttpClient, private router: Router, public toastController: ToastController,
                 private navCtrl: NavController) { }

    ngOnInit() {
    }

    // 注册
    alterPassword() {
        if (!this.oldPassword || !this.password || !this.confirmPassword) {
            console.log('密码不能为空');
            this.presentToast('密码不能为空').then();
            return;
        }
        const params = {
            token: localStorage.getItem('user_token'),
            oldPassword: this.oldPassword,
            newPassword: this.password
        };
        console.log(params);

        this.http.post(ROOT_URL + 'user/alter/password', params).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                console.log(res, '修改成功');
                this.presentToast(res['message']).then(r => {
                    console.log(r);
                    this.navCtrl.pop().then();
                });
            }
            else {
                this.loading = false;
                this.presentToast(res['message']);
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

    goUserPortocol() {
        this.router.navigate(['/user-portocol']).then(res => {
            console.log(res);
        });
    }
}
