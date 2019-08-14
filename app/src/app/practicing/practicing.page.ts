import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionSheetController, LoadingController, NavController, PopoverController} from '@ionic/angular';
import {PopoverComponent} from './popover/popover.component';
import {SequenceStorageService} from '../sequence-storage.service';

@Component({
    selector: 'app-practicing',
    templateUrl: './practicing.page.html',
    styleUrls: ['./practicing.page.scss'],
})
export class PracticingPage implements OnInit {

    @ViewChild('testRef')
    testRef;

    userType = localStorage.getItem('user_role_name');

    constructor(private navController: NavController, private http: HttpClient,
                public loadingController: LoadingController,
                public popoverController: PopoverController,
                public actionSheetController: ActionSheetController,
                private sequenceStorage: SequenceStorageService) {
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
        this.presentSequenceActionSheet().then();
    }

    optionsPracticing() {
        // this.presentPracticingLoading().then();
        // this.navController.navigateForward('/options-practicing').then();
        // this.presentPopover(event).then();
        this.presentActionSheet().then();
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

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event: ev,
            translucent: true
        });
        return await popover.present();
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: '题目类型',
            buttons: [{
                text: '单选题',
                handler: () => {
                    console.log('Share clicked');
                    this.presentPracticingLoading().then();
                    this.navController.navigateForward('/options-practicing', {
                        queryParams: {
                            type: 1
                        }
                    }).then();
                }
            }, {
                text: '多选题',
                handler: () => {
                    console.log('Play clicked');
                    this.presentPracticingLoading().then();
                    this.navController.navigateForward('/options-practicing', {
                        queryParams: {
                            type: 2
                        }
                    }).then();
                }
            }, {
                text: '判断题',
                handler: () => {
                    console.log('Favorite clicked');
                    this.presentPracticingLoading().then();
                    this.navController.navigateForward('/options-practicing', {
                        queryParams: {
                            type: 3
                        }
                    }).then();
                }
            },
                {
                    text: '综合题',
                    handler: () => {
                        console.log('Favorite clicked');
                        this.presentPracticingLoading().then();
                        this.navController.navigateForward('/options-practicing', {
                            queryParams: {
                                type: 6
                            }
                        }).then();
                    }
                },
                {
                    text: '取消',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
        });
        await actionSheet.present();
    }

    async presentSequenceActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            buttons: [{
                text: '继续答题',
                handler: () => {
                    this.presentPracticingLoading().then();
                    this.navController.navigateForward('/sequence').then();
                }
            }, {
                text: '重新开始',
                handler: () => {
                    // localStorage.getItem('sequence-random-magic');
                    localStorage.setItem('sequence-random-magic', '');
                    this.sequenceStorage.clearRandomStorage();
                    this.presentPracticingLoading().then();
                    this.navController.navigateForward('/sequence').then();
                }
            }, {
                text: '取消',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }
}
