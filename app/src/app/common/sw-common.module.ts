import {NgModule} from '@angular/core';
import {QuestionComponent} from './question/question.component';
import {SubQuestionComponent} from './sub-question/sub-question.component';
import {SumQuestionComponent} from './sum-question/sum-question.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [QuestionComponent,
        SubQuestionComponent,
        SumQuestionComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [QuestionComponent,
        SubQuestionComponent,
        SumQuestionComponent]
})
export class SwCommonModule {
}
