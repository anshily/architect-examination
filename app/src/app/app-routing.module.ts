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
  { path: 'do-wrong', loadChildren: './do-wrong/do-wrong.module#DoWrongPageModule' },  { path: 'alter-password', loadChildren: './alter-password/alter-password.module#AlterPasswordPageModule' },
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


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
