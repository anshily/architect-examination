import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionComponent} from './question/question.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ParentQuestionComponent} from './parent-question/parent-question.component';
import {SubQuestionComponent} from './sub-question/sub-question.component';
import {ExamComponent} from './exam/exam.component';
import {RandomPracticeComponent} from './random-practice/random-practice.component';
import {SequencePracticeComponent} from './sequence-practice/sequence-practice.component';
import {SimulateExamComponent} from './simulate-exam/simulate-exam.component';
import {WrongQuestionComponent} from './wrong-question/wrong-question.component';
import {NavBackComponent} from './nav-back/nav-back.component';
import {RandomQuestionComponent} from './random-question/random-question.component';
import {RandomSumQuestionComponent} from './random-sum-question/random-sum-question.component';
import {RandomSubQuestionComponent} from './random-sub-question/random-sub-question.component';
import {WrongDetailComponent} from './wrong-detail/wrong-detail.component';
import {SequenceQuestionComponent} from './sequence-question/sequence-question.component';
import {SequenceSubQuestionComponent} from './sequence-sub-question/sequence-sub-question.component';
import {SequenceSumQuestionComponent} from './sequence-sum-question/sequence-sum-question.component';
import {ExamHistoryItemComponent} from './exam-history-item/exam-history-item.component';

@NgModule({
    declarations: [QuestionComponent,
        ParentQuestionComponent,
        SubQuestionComponent,
        ExamComponent,
        RandomPracticeComponent,
        SequencePracticeComponent,
        SimulateExamComponent,
        WrongQuestionComponent,
        NavBackComponent,
        RandomQuestionComponent,
        RandomSumQuestionComponent,
        RandomSubQuestionComponent,
        WrongDetailComponent,
        SequenceQuestionComponent,
        SequenceSubQuestionComponent,
        SequenceSumQuestionComponent,
        ExamHistoryItemComponent],
    entryComponents: [],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [QuestionComponent,
        ParentQuestionComponent,
        SubQuestionComponent,
        ExamComponent,
        RandomPracticeComponent,
        SequencePracticeComponent,
        SimulateExamComponent,
        WrongQuestionComponent,
        NavBackComponent,
        RandomQuestionComponent,
        RandomSumQuestionComponent,
        RandomSubQuestionComponent,
        WrongDetailComponent,
        SequenceQuestionComponent,
        SequenceSubQuestionComponent,
        SequenceSumQuestionComponent,
        ExamHistoryItemComponent]
})
export class ShareModule {
}
