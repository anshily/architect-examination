import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-add-member',
    templateUrl: './add-member.page.html',
    styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

    name;
    workType;

    constructor(private http: HttpClient, private router: Router, public toastController: ToastController) {
    }

    ngOnInit() {
    }

    // 注册用户
    add() {
        if (!this.name || !this.workType) {
            console.log('帐号/密码不能为空');
            this.presentToast('请将信息填写完整！').then();
            return;
        }
        const params = {
            user: {
                identify_card: this.name
            },
            role: this.workType
        };
        console.log(params);

        this.http.post(ROOT_URL + 'user/addUser', params).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                console.log(res, '添加成功');
            } else {
                this.presentToast(res['message']).then();
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
}
