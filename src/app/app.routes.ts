import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'conductor',
    loadComponent: () => import('./conductor/conductor.page').then( m => m.ConductorPage)
  },
  {
    path: 'alumno',
    loadComponent: () => import('./alumno/alumno.page').then( m => m.AlumnoPage)
  },
  {
    path: 'alumno/:id',
    loadComponent: () => import('./alumno/alumno.page').then( m => m.AlumnoPage)
  },

];
