import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { DatabaseService } from './../../services/database.service';
import { IItem } from 'src/app/interfaces/item';
import { RouteReuseStrategy } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsModalComponent } from 'src/app/components/details-modal/details-modal.component';
import { FirebaseService } from '../../services/firebase.service';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';


@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class FoodPage implements OnInit {
  items$: IItem[];
  itemData: IItem;

  constructor(private firebaseService: FirebaseService, private modalController: ModalController) {
    this.itemData = {} as IItem;
  }

  async ngOnInit() {
    await this.firebaseService.getFoodItems().then(data=>{
      this.items$ = data;
    })
  }

  async openDetails(item: IItem) {
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      componentProps: {
        selectedItem: item
      }
    });
    modal.present();
  }

  async openPostForm(){
    const modal = await this.modalController.create({
      component: PostFormComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
