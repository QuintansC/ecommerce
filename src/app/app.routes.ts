import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastrar } from './cadastrar/cadastrar';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'login',
        component: Login,
        title: 'login page'
    },
    {
        path: 'registro',
        component: Cadastrar,
        title: 'Cadastrar page'
    }
];
