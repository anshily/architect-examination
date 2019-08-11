import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {QuestionDetailPage} from './question-detail.page';
import {ShareModule} from '../share/share.module';

const routes: Routes = [
    {
        path: '',
        component: QuestionDetailPage
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
    declarations: [QuestionDetailPage]
})
export class QuestionDetailPageModule {
}
