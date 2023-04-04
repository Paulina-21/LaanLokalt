import { Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

export const routes: Routes = [
  {

    path: '',
    redirectTo: '/food',
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
  { path: 'item', component: ItemComponent },
];
