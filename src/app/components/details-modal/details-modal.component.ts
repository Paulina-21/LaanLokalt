import { Component, OnInit, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { IItem } from 'src/app/interfaces/item';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DetailsModalComponent  implements OnInit {

  selectedItem : IItem;

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}

  closeModal(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
