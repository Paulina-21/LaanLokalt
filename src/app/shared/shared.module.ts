import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ItemComponent } from '../components/item/item.component';
import { HeaderComponent } from '../components/header/header.component';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../services/firebase.service';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


// Initialize Firebase app
const firebaseConfig = environment.firebase;
const firebaseApp = initializeApp(firebaseConfig);

// Initialize AngularFire database
export const database = getDatabase(firebaseApp);

@NgModule({
  declarations: [ItemComponent, HeaderComponent, DetailsModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    AngularFirestoreModule,
    FirebaseService // Mark added
  ],
  exports: [ItemComponent, HeaderComponent, DetailsModalComponent]
})
export class SharedModule { }
