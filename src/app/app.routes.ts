import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastrar } from './cadastrar/cadastrar';

export const routes: Routes = [
    {
        path: '',
        component: Login,
        title: 'login page'
    },
    {
        path: 'registro',
        component: Cadastrar,
        title: 'Cadastrar page'
    }
];
