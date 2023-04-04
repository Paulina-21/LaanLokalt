import { Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

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
  { path: 'item', component: ItemComponent },
];
