import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-admin-menu',
    templateUrl: './admin-menu.page.html',
    styleUrls: ['./admin-menu.page.scss'],
})
export class AdminMenuPage implements OnInit {

    constructor(private router: Router, private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    addMember() {
        // add-member
        this.router.navigate(['/add-member']).then(res => {
            console.log(res);
        });
    }

    goAlterPassword() {
        this.navCtrl.navigateForward('/alter-password').then();
    }

    signUpInfo() {
        this.navCtrl.navigateForward('/sign-up-management').then();
    }

    userManagement(){
        this.navCtrl.navigateForward('/user-management').then();
    }

    logout() {
        localStorage.clear();
        this.navCtrl.navigateForward('/login').then();
    }
}
