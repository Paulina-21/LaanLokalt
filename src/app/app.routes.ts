import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'food',
    loadComponent: () => import('./pages/food/food.page').then( m => m.FoodPage)
  },
  {
    path: 'pets-and-plants',
    loadComponent: () => import('./pages/pets-and-plants/pets-and-plants.page').then( m => m.PetsAndPlantsPage)
  },
  {
    path: 'resources',
    loadComponent: () => import('./pages/resources/resources.page').then( m => m.ResourcesPage)
  },
];
