import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RandomPracticingPage} from './random-practicing.page';
import {SwCommonModule} from '../common/sw-common.module';

const routes: Routes = [
    {
        path: '',
        component: RandomPracticingPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SwCommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [RandomPracticingPage]
})
export class RandomPracticingPageModule {
}
