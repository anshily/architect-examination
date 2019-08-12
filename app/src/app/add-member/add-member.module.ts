import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AddMemberPage} from './add-member.page';
import {ShareModule} from '../share/share.module';

const routes: Routes = [
    {
        path: '',
        component: AddMemberPage
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
    declarations: [AddMemberPage]
})
export class AddMemberPageModule {
}
