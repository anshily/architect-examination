import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwQuestionComponent} from './sw-question/sw-question.component';
import {SwSubQuestionComponent} from './sw-sub-question/sw-sub-question.component';
import {SwSumQuestionComponent} from './sw-sum-question/sw-sum-question.component';
import {RouterModule, Routes} from '@angular/router';
import {SwExamPage} from './sw-exam.page';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
    {
        path: '',
        component: SwExamPage
    }
];

@NgModule({
    declarations: [SwQuestionComponent,
        SwSubQuestionComponent,
        SwSumQuestionComponent,
        SwExamPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [SwQuestionComponent,
        SwSubQuestionComponent,
        SwSumQuestionComponent]
})
export class SwExamPageModule {
}
