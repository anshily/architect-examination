import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PracticingPage} from './practicing.page';
import {ShareModule} from '../share/share.module';
import {PopoverComponent} from './popover/popover.component';

const routes: Routes = [
    {
        path: '',
        component: PracticingPage
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
    entryComponents: [PopoverComponent],
    declarations: [PracticingPage, PopoverComponent]
})
export class PracticingPageModule {
}
