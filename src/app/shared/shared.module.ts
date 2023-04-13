import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ItemComponent } from '../components/item/item.component';
import { HeaderComponent } from '../components/header/header.component';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../services/firebase.service';


@NgModule({
  declarations: [ItemComponent, HeaderComponent, DetailsModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ItemComponent, HeaderComponent, DetailsModalComponent]
})
export class SharedModule { }
