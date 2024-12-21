import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('../app/components/home/home.component').then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: 'sign-in',
    pathMatch: 'full',
    loadComponent: () =>
      import('../app/auth/components/signup/signup.component').then(
        (m) => m.SignupComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/auth/components/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: 'chat-list',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        '../app/components/chat/components/chat-list/chat-list.component'
      ).then((m) => m.ChatListComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        '../app/components/page-not-found/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  },
];
