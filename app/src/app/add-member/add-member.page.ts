import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, NavController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-add-member',
    templateUrl: './add-member.page.html',
    styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

    name;
    workType;
    idCard;
    typeList = [];

    constructor(private http: HttpClient, private router: Router, public toastController: ToastController,
                public alertController: AlertController, private navCtrl: NavController) {
    }

    ngOnInit() {
        this.http.get(ROOT_URL + '/role/getRoleList').subscribe(res => {
           if (res['code'] === 0) {
               console.log(res);
               this.typeList = res['data'];
           }
        });
    }

    // 注册用户
    add() {
        if (!this.name || !this.workType || !this.idCard) {
            this.presentToast('请将信息填写完整！').then();
            return;
        }
        const params = {
            user: {
                identify_card: this.idCard,
                username: this.name
            },
            role: this.workType
        };
        console.log(params);

        this.http.get(ROOT_URL + 'user/nameExist?name=' + this.idCard).subscribe(res => {
            console.log(res);
            if (res['code'] == 0) {

                if (res['data'] == 1) {
                    console.log('已存在！');
                    this.presentExistConfirm().then();
                }

                if (res['data'] == 0) {
                    this.saveUser(params);
                }
            }
        });


    }

    saveUser(params) {
        this.http.post(ROOT_URL + 'user/addUser', params).subscribe(res => {
            console.log(res);
            if (res['code'] === 0) {
                console.log(res, '添加成功');
                this.presentSumAlertConfirm().then();
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


    async presentSumAlertConfirm() {
        const alert = await this.alertController.create({
            header: '添加成功',
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

    async presentExistConfirm() {
        const alert = await this.alertController.create({
            header: '用户已存在！',
            // message: `请注意页面错题：【${err}】`,
            buttons: [
                {
                    text: '我知道了',
                    handler: () => {
                        // this.navCtrl.pop().then();
                        // console.log('Confirm Okay');
                        // this.scrollToNext();
                    }
                }
            ]
        });

        await alert.present();
    }
}
