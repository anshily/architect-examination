import {Component, HostListener} from '@angular/core';

import {ModalController, NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AppMinimize} from '@ionic-native/app-minimize/ngx';
import {NavigationEnd, Router} from '@angular/router';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

    url;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
      this.initRouterListen();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();
    });
  }

    initRouterListen() {
        this.router.events.subscribe(event => { // 需要放到最后一个执行
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        });
    }
}
