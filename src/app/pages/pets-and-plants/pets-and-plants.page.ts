import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DatabaseService } from 'src/app/services/database.service';
import { IItem } from 'src/app/interfaces/item';
import { ItemComponent } from 'src/app/components/item/item.component';

@Component({
  selector: 'app-pets-and-plants',
  templateUrl: './pets-and-plants.page.html',
  styleUrls: ['./pets-and-plants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, ItemComponent]
})
export class PetsAndPlantsPage implements OnInit {

  plantsAndAnimals : IItem[] = []
  filterValue : number = 0;
  userId : number = 2; // should be retrieved from a service

  constructor(
    private animalService : DatabaseService, 
    private alertController : AlertController) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(){
    this.animalService.getPlantsAndAnimals().subscribe(
      data=>{
        this.plantsAndAnimals = data.filter(item => {
          if (this.filterValue == 3){
            return item.UserId == this.userId;
          } else {
            return this.filterValue == 0 || 
              item.FilterTag == this.filterValue
          }}
        );        
      } 
    );
  } 

  async presentAlert() {
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
}
