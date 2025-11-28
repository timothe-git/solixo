import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home paage',
        component: HomeComponent,
    },
    {
        path: 'user',
        title: 'User paage',
        component: UserComponent,
    },
    {
        path: 'login',
        title: 'Login paage',
        component: LoginComponent,
    },
    {
        path: '**',
        title: 'Not found paage',
        component: NotFoundComponent,
    },
];
