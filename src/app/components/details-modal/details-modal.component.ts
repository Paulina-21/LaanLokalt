import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { IItem } from 'src/app/interfaces/item';
import { User } from 'src/app/interfaces/user';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DetailsModalComponent  implements OnInit {

  selectedItem : IItem;
  user : User;
  userItems: IItem[];

  constructor(
    private modalCtrl : ModalController,
    private dataService : DatabaseService
    ) { }

  ngOnInit() {
    this.user = {
      Id : 1,
      Name : 'Hans Hansen',
      PhoneNo: '1234567890' ,
      HomeAddress: 'Hovedgade 1, 1111 Aarhus',
      Image: 'https://i.pravatar.cc/150?u=hanshansen1@hotmail.com'
    }

    this.dataService.getAllItemsForUser(this.user.Id).subscribe(
      data=>{
        this.userItems = data;
        console.log(data)
      }
    )
  }

  closeModal(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
