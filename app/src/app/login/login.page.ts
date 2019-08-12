import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public account: any;
    public pass: any;

  constructor( private http: HttpClient, private router: Router, public toastController: ToastController) { }

  ngOnInit() {}

    // 登录
    login() {
        if (!this.account || !this.pass) {
            console.log('帐号/密码不能为空');
            this.presentToast('帐号/密码不能为空').then(res => {
                console.log(res);
            });
            return;
        }
        const params = {
            identify_card: this.account,
            password: this.pass
        };
        this.http.post(ROOT_URL + 'user/login', params, ).subscribe(res => {
          console.log(res);
            if (res['code'] === 0) {
                console.log(res, '登陆');
                // localStorage.setItem('anshi_cookie', res['data']['cookie']);
                localStorage.setItem('user_token', res['data']['token']);

                if (res['data']['user'] && res['data']['user']['category_id']) {
                    localStorage.setItem('user_category', res['data']['user']['category_id']);
                    localStorage.setItem('user_role_name', res['data']['user']['role_name']);

                    if (res['data']['user']['category_id'] == 1) {
                        this.router.navigate(['/admin-menu']).then();
                    } else {
                        this.router.navigate(['/home']).then();
                    }
                }
            }
            else {
                this.presentToast(res['message']).then(r => {
                    console.log(r);
                });
            }
        }, (err) => {
            console.log(err);
            this.presentToast('网络错误').then(r => {
                console.log(r);
            });
        });

    }

    forgetPass() {
        this.presentToast('请联系管理员 q: 1175902641').then(r => {
            console.log(r);
        });
    }

    goIndex() {
        // this.api.pause();
        this.router.navigate(['/home']).then(res => {
            console.log(res);
        });
    }

    goRegister() {
        this.router.navigate(['/register']).then(res => {
            console.log(res);
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
