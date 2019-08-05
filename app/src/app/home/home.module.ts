import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {ShareModule} from '../share/share.module';
import {TestNavComponent} from './test-nav/test-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,
      TestNavComponent],
    entryComponents: [HomePage,
        TestNavComponent]
})
export class HomePageModule {}
