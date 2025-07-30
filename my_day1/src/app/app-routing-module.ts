import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { Login } from './login/login';
import { authguard } from './services/auth.guard';
import { About } from './pages/about/about';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },

  { path: 'login', component: Login },

  {
    path: 'posts',
    component: Posts,
    canActivate: [authguard] 
  },

  {
    path: 'about',
    component: About,
    canActivate: [authguard] 
  },

  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}