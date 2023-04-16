import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
})
export class ChatPage {
  messages: any[] = [
    {
      content:
        'Hej alle, jeg har nogle kartofler som jeg ikke skal bruge. nogen der vil have dem?',
      fromMe: false,
      showDetails: true,
      senderName: 'Hans Hansen',
      timestamp: new Date(),
    },
    {
      content: 'Hey, jeg kunne godt bruge nogle kartofler!',
      fromMe: true,
      showDetails: false,
      senderName: '',
      timestamp: new Date(),
    },
    {
      content: 'Fedt, hvornår kan du komme og hente dem?',
      fromMe: false,
      showDetails: true,
      senderName: 'Hans Hansen',
      timestamp: new Date(),
    },
  ];

  newMessage = {
    content: '',
    fromMe: true,
    showDetails: false,
    senderName: '',
    timestamp: null,
  };

  constructor() { }

  sendMessage() {
    const message = {
      ...this.newMessage,
      timestamp: new Date(),
    };
    this.messages.push(message);
    this.newMessage.content = '';
  }
}
