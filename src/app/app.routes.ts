import { Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

export const routes: Routes = [
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
    path: 'petsandplants',
    loadComponent: () => import('./pages/pets-and-plants/pets-and-plants.page').then( m => m.PetsAndPlantsPage)
  },
  {
    path: 'resources',
    loadComponent: () => import('./pages/resources/resources.page').then( m => m.ResourcesPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  { path: 'item', component: ItemComponent },  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'rules',
    loadComponent: () => import('./pages/rules/rules.page').then( m => m.RulesPage)
  },
  {
    path: 'questions',
    loadComponent: () => import('./pages/questions/questions.page').then( m => m.QuestionsPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },

];
