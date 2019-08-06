import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.page.html',
    styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    goAlterPassword() {
        this.navCtrl.navigateForward('/alter-password').then();
    }
}
