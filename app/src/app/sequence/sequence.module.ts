import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SequencePage } from './sequence.page';
import {ShareModule} from '../share/share.module';

const routes: Routes = [
  {
    path: '',
    component: SequencePage
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
  declarations: [SequencePage]
})
export class SequencePageModule {}
