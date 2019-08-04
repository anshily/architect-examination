import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgCoreModule} from 'videogular2/core';
import {VgBufferingModule} from 'videogular2/buffering';
import {ShareModule} from '../share/share.module';
import {QuestionComponent} from '../share/question/question.component';
import {TestNavComponent} from './test-nav/test-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      ShareModule,
      VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule,
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
