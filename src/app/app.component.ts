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
    { title: 'Mad', url: '/food', icon: 'fast-food' },
    { title: 'Resourcer', url: '/tools', icon: 'hammer' },
    { title: 'Pasning af Planter og Dyr', url: '/petsandplants', icon: 'leaf' },
    { title: 'Chat', url: '/chat', icon: 'chatbubbles' },
    { title: 'Regler', url: '/rules', icon: 'book' },
    { title: 'Spørgsmål', url: '/question', icon: 'help-circle' },
    { title: 'Indstillinger', url: '/settings', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
