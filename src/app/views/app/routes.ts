import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'App'
    },
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
        data: {
          title: 'Usuarios'
        }
      },
      {
        path: 'photos',
        loadComponent: () => import('./photos/photos.component').then(m => m.PhotosComponent),
        data: {
          title: 'Fotos'
        }
      }
      
    ]
  }
];


