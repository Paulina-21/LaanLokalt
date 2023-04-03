import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'food',
    loadComponent: () => import('./pages/food/food.page').then(m => m.FoodPage)
  },

  {
    path: 'resources',
    loadComponent: () => import('./pages/resources/resources.page').then(m => m.ResourcesPage)
  },
  {
    path: 'pets-and-plants',
    loadComponent: () => import('./pages/pets-and-plants/pets-and-plants.page').then(m => m.PetsAndPlantsPage)
  },

];
