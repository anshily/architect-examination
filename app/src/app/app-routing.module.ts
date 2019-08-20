import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mine', loadChildren: './mine/mine.module#MinePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'feeds', loadChildren: './feeds/feeds.module#FeedsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'practicing', loadChildren: './practicing/practicing.module#PracticingPageModule' },
  { path: 'do-wrong', loadChildren: './do-wrong/do-wrong.module#DoWrongPageModule' },
  { path: 'alter-password', loadChildren: './alter-password/alter-password.module#AlterPasswordPageModule' },
  { path: 'exam', loadChildren: './exam/exam.module#ExamPageModule' },
  { path: 'sequence', loadChildren: './sequence/sequence.module#SequencePageModule' },
  { path: 'random', loadChildren: './random/random.module#RandomPageModule' },
  { path: 'exam-result', loadChildren: './exam-result/exam-result.module#ExamResultPageModule' },
  { path: 'question-detail', loadChildren: './question-detail/question-detail.module#QuestionDetailPageModule' },
  { path: 'exam-review', loadChildren: './exam-review/exam-review.module#ExamReviewPageModule' },
  { path: 'add-member', loadChildren: './add-member/add-member.module#AddMemberPageModule' },
  { path: 'admin-menu', loadChildren: './admin-menu/admin-menu.module#AdminMenuPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'user-management', loadChildren: './user-management/user-management.module#UserManagementPageModule' },
  { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailPageModule' },
  { path: 'sign-up-management', loadChildren: './sign-up-management/sign-up-management.module#SignUpManagementPageModule' },
  { path: 'sign-up-detail', loadChildren: './sign-up-detail/sign-up-detail.module#SignUpDetailPageModule' },
  { path: 'options-practicing', loadChildren: './options-practicing/options-practicing.module#OptionsPracticingPageModule' },
  { path: 'random-practicing', loadChildren: './random-practicing/random-practicing.module#RandomPracticingPageModule' },
  { path: 'sequence-practicing', loadChildren: './sequence-practicing/sequence-practicing.module#SequencePracticingPageModule' },
  { path: 'sw-exam', loadChildren: './sw-exam/sw-exam.module#SwExamPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
