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
    pages;
    pageNum;
    users = [];
  constructor(private http: HttpClient,
              private navCtrl: NavController) { }

  ngOnInit() {
    // this.http.get(ROOT_URL + 'user/list').subscribe(res => {
    //   console.log(res)
    //     if (res['code'] == 0){
    //     this.users = res['data']['list'];
    //     this.pages = res['data']['pages'];
    //     this.pageNum = res['data']['pageNum'];
    //     }
    // });

    let params = {
        user: {
            username: ''
        },
        pageNum: 1,
        pageSize: 20
    };
      this.http.post(ROOT_URL + 'user/custom/list', params).subscribe(res => {
          console.log(res)
          if (res['code'] == 0){
              this.users = res['data']['list'];
              this.pages = res['data']['pages'];
              this.pageNum = res['data']['pageNum'];
          }
      });
  }

    goDetail(u){
    console.log(u);
    this.navCtrl.navigateForward('/user-detail',{queryParams: {
        uid: u.id
        }}).then();
    }

    search() {
        let params = {
            user: {
                username: this.searchValue ? this.searchValue : ''
            },
            pageNum: 1,
            pageSize: 20
        };

        this.http.post(ROOT_URL + 'user/custom/list', params).subscribe(res => {
            console.log(res)
            if (res['code'] == 0){
                this.users = res['data']['list'];
                this.pages = res['data']['pages'];
                this.pageNum = res['data']['pageNum'];
            }
        });
    }

    loadData(event) {
      if (this.pageNum < this.pages) {
          let tmp = ++this.pageNum;

          let params = {
              user: {
                  username: this.searchValue ? this.searchValue : ''
              },
              pageNum: tmp,
              pageSize: 20
          };
          this.http.post(ROOT_URL + 'user/custom/list', params).subscribe(res => {
              console.log(res)
              if (res['code'] == 0){
                  // this.users = res['data']['list'];
                  // this.pages = res['data']['pages'];
                  // this.pageNum = res['data']['pageNum'];

                  this.users = this.users.concat(res['data']['list']);
                  this.pages = res['data']['pages'];
                  this.pageNum = res['data']['pageNum'];

                  event.target.complete();
              }
          });

          // this.http.get(ROOT_URL + 'user/list?pageNum=' + tmp).subscribe(res => {
          //     console.log(res)
          //     if (res['code'] == 0){
          //         this.users = this.users.concat(res['data']['list']);
          //         this.pages = res['data']['pages'];
          //         this.pageNum = res['data']['pageNum'];
          //
          //         event.target.complete();
          //     }
          // });
      } else {
          event.target.complete();
      }
    }

    // pageNum: 1
    // pageSize: 10
    // pages: 6
    // size: 10
    // total: 51

    clear() {
      console.log('clear');
        let params = {
            user: {
                username: ''
            },
            pageNum: 1,
            pageSize: 20
        };
        this.http.post(ROOT_URL + 'user/custom/list', params).subscribe(res => {
            console.log(res)
            if (res['code'] == 0){
                this.users = res['data']['list'];
                this.pages = res['data']['pages'];
                this.pageNum = res['data']['pageNum'];
            }
        });
    }
}
