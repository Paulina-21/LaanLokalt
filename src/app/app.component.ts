import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {

  public appPages = [
    { title: 'Start', url: '/home', icon: 'home' },
    { title: 'Mad', url: '/food', icon: 'fast-food' },
    { title: 'Resourcer', url: '/resources', icon: 'hammer' },
    { title: 'Pasning af Planter og Dyr', url: '/petsandplants', icon: 'leaf' },
    { title: 'Chat', url: '/chat', icon: 'chatbubbles' },
    { title: 'Regler', url: '/rules', icon: 'book' },
    { title: 'Spørgsmål', url: '/questions', icon: 'help-circle' },
    { title: 'Indstillinger', url: '/settings', icon: 'settings' },
    { title: 'Om os', url: '/about', icon: 'information-circle' }
  ];

  constructor() { }
}
