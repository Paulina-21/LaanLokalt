import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
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
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class FoodPage implements OnInit {
  items$: IItem[];
  itemData: IItem;
  filterValue : number = 0;

  constructor(
    private firebaseService: FirebaseService, 
    private modalController: ModalController,
    private alertController : AlertController
    ) {
    this.itemData = {} as IItem;
  }

  async ngOnInit() {
    this.getAllItems();
  }

  async getAllItems(){
    await this.firebaseService.getFoodItems().then(data => {
      this.items$ = data;
    })
  }

  async showFilterOptions() {
    const alert = await this.alertController.create({
      header: 'Filter',
      inputs: [
        {
          name: 'all',
          type: 'radio',
          label: 'Alle',
          value: 0,
          checked: this.isAlertChecked(0)
        },
        {
          name: 'offer',
          type: 'radio',
          label: 'Tilbud',
          value: 1,
          checked: this.isAlertChecked(1)
        },
        {
          name: 'request',
          type: 'radio',
          label: 'Efterspørgsel',
          value: 2,
          checked: this.isAlertChecked(2)
        },
        {
          name: 'my',
          type: 'radio',
          label: 'Mine opslag',
          value: 3,
          checked: this.isAlertChecked(3)
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          role: 'confirm',
          handler: (value) => {
            this.filterValue = value;
            this.getAllItems();            
          }
        }
      ]
    });

    await alert.present();
  }

  isAlertChecked(optionValue : number){
    return optionValue == this.filterValue;
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

  async openPostForm() {
    const modal = await this.modalController.create({
      component: PostFormComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
