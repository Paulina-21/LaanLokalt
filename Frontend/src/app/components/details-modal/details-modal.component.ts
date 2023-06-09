import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { IItem } from 'src/app/interfaces/item';
import { User } from 'src/app/interfaces/user';
import { ItemsserviceService } from 'src/app/services/itemsservice.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class DetailsModalComponent  implements OnInit {

  selectedItem : IItem;
  user : User;
  userItems: IItem[];

  constructor(
    private modalCtrl : ModalController,
    private itemsService : ItemsserviceService
    ) { }

  ngOnInit() {
    this.user = {
      Id : 1,
      Name : 'Hans Hansen',
      PhoneNo: '1234567890' ,
      HomeAddress: 'Hovedgade 1, 1111 Aarhus',
      Image: 'https://i.pravatar.cc/150?u=hanshansen1@hotmail.com'
    }

    this.itemsService.getItemsByUserId(this.user.Id)
    .subscribe(data=>{
      this.userItems = data;
    });
  }

  closeModal(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async openDetails(item : IItem){
    const modal = await this.modalCtrl.create({
      component: DetailsModalComponent,
      componentProps: {
        selectedItem: item
      }
    });
    modal.present();
    this.closeModal();
  }
}
