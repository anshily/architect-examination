import {NgModule} from '@angular/core';
import {QuestionComponent} from './question/question.component';
import {SubQuestionComponent} from './sub-question/sub-question.component';
import {SumQuestionComponent} from './sum-question/sum-question.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {NavBackComponent} from './nav-back/nav-back.component';

@NgModule({
    declarations: [QuestionComponent,
        SubQuestionComponent,
        SumQuestionComponent,
        NavBackComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [QuestionComponent,
        SubQuestionComponent,
        SumQuestionComponent,
        NavBackComponent]
})
export class SwCommonModule {
}
