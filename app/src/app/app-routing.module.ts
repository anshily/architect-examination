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


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
