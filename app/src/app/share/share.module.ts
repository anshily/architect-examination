import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionComponent} from './question/question.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ParentQuestionComponent} from './parent-question/parent-question.component';
import {SubQuestionComponent} from './sub-question/sub-question.component';

@NgModule({
    declarations: [QuestionComponent,
        ParentQuestionComponent,
        SubQuestionComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [QuestionComponent,
        ParentQuestionComponent,
        SubQuestionComponent]
})
export class ShareModule {
}
