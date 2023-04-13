import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemComponent } from '../components/item/item.component';
import { HeaderComponent } from '../components/header/header.component';
import { DetailsModalComponent } from '../components/details-modal/details-modal.component';
import { PostFormComponent } from '../components/post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemComponent, 
    HeaderComponent, 
    DetailsModalComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule, IonicModule.forRoot(), IonicModule, ReactiveFormsModule
  ],
  exports: [ 
    ItemComponent, 
    HeaderComponent, 
    DetailsModalComponent,
    PostFormComponent]
})
export class SharedModule { }
