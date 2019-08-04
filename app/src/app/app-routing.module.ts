import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mine', loadChildren: './mine/mine.module#MinePageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'user-portocol', loadChildren: './user-portocol/user-portocol.module#UserPortocolPageModule' },
  { path: 'feeds', loadChildren: './feeds/feeds.module#FeedsPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'login-succeed', loadChildren: './login-succeed/login-succeed.module#LoginSucceedPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
