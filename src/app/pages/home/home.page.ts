import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule],
})
export class HomePage {
  constructor(private fbServise : FirebaseService) { }
}
