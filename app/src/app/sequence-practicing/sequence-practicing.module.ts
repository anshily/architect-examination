import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SequencePracticingPage} from './sequence-practicing.page';
import {SwCommonModule} from '../common/sw-common.module';

const routes: Routes = [
    {
        path: '',
        component: SequencePracticingPage
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
    declarations: [SequencePracticingPage]
})
export class SequencePracticingPageModule {
}
