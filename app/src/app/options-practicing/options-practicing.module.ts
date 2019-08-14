import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {OptionsPracticingPage} from './options-practicing.page';
import {SwCommonModule} from '../common/sw-common.module';

const routes: Routes = [
    {
        path: '',
        component: OptionsPracticingPage
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
    declarations: [OptionsPracticingPage]
})
export class OptionsPracticingPageModule {
}
