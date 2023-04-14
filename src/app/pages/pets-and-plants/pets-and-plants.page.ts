import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ModalController } from '@ionic/angular';
import { IItem } from 'src/app/interfaces/item';
import { DetailsModalComponent } from 'src/app/components/details-modal/details-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-pets-and-plants',
  templateUrl: './pets-and-plants.page.html',
  styleUrls: ['./pets-and-plants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class PetsAndPlantsPage implements OnInit {

  plantsAndAnimals : IItem[] = []
  filterValue : number = 0;
  userId : number = 2; // should be retrieved from a service
  viewItems: IItem[];

  constructor(
    private dbService : FirebaseService, 
    private alertController : AlertController,
    private modalController : ModalController) { }

  async ngOnInit() {
    await this.dbService.getPlantsAndAnimalsItems().then(data=>{
      this.plantsAndAnimals = data;
    })
    this.filterItems();
  }

  filterItems() {
    this.viewItems = this.plantsAndAnimals.filter(item => {
      if(this.filterValue == 0){
        return item;
      }      
      else if (this.filterValue == 3){
        return item.UserId == this.userId;
      } else {
        return item.FilterTag == this.filterValue;
      }}
    );     
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
            this.filterItems();            
          }
        }
      ]
    });

    await alert.present();
  }

  isAlertChecked(optionValue : number){
    return optionValue == this.filterValue;
  }

  async openDetails(item : IItem){
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
