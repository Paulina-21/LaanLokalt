import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { Platform } from '@ionic/angular';

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
    {
      content: 'Jeg kan komme på fredag hvis det passer med dig?',
      fromMe: true,
      showDetails: false,
      senderName: '',
      timestamp: new Date(),
    },
    {
      content: 'Det passer fint omkring middagstid på fredag.',
      fromMe: false,
      showDetails: true,
      senderName: 'Hans Hansen',
      timestamp: new Date(),
    },
    {
      content: 'Ok',
      fromMe: true,
      showDetails: false,
      senderName: '',
      timestamp: new Date(),
    },
    {
      content: 'Så ses vi på fredag.',
      fromMe: true,
      showDetails: false,
      senderName: '',
      timestamp: new Date(),
    },
  ];

  newMessage = {
    content: '',
    fromMe: true,
    showDetails: false,
    senderName: 'Mig',
    timestamp: new Date(),
  };

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        // Set the mode to native
        document.body.classList.add('cordova');
      } else {
        // Set the mode to md
        document.body.classList.add('md');
      }
    });
  }

  sendMessage() {
    const message = {
      ...this.newMessage,
      timestamp: new Date(),
    };
    this.messages.push(message);
    this.newMessage.content = '';
  }
}
