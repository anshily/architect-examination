import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
                public route: ActivatedRoute,
                private router: Router,
                private navController: NavController,
                public toastController: ToastController) {
    }


    ngOnInit(): void {
    }

    navTo(url) {
        this.navController.navigateForward(url ? url : '/home').then(
            () => {
                console.log('feed');
            }
        );
    }
}
