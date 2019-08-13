import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.page.html',
  styleUrls: ['./user-management.page.scss'],
})
export class UserManagementPage implements OnInit {

    searchValue;
    users = [];
  constructor(private http: HttpClient,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.http.get(ROOT_URL+ 'user/list').subscribe(res => {
      console.log(res)
        if (res['code'] == 0){
        this.users = res['data']['list'];
        }
    });
  }

    goDetail(u){
    console.log(u);
    this.navCtrl.navigateForward('/user-detail',{queryParams: {
        uid: u.id
        }})
    }

    search(){

    }

    loadData(event) {
        setTimeout(() => {
            console.log(event);
            event.target.complete();
        //
        //     // App logic to determine if all data is loaded
        //     // and disable the infinite scroll
        //     if (data.length == 1000) {
        //         event.target.disabled = true;
        //     }
        }, 500);
    }
}
