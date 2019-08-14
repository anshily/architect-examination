import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {UserDetailPage} from './user-detail.page';
import {ShareModule} from '../share/share.module';

const routes: Routes = [
    {
        path: '',
        component: UserDetailPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UserDetailPage]
})
export class UserDetailPageModule {
}
