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


@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class FoodPage implements OnInit {
  items$: Observable<any>;
  itemData: IItem;

  constructor(private itemService: DatabaseService/*,private firebaseService: FirebaseService*/, private modalController: ModalController) {
    this.itemData = {} as IItem;
  }

  ngOnInit() {
    this.items$ = this.itemService.getData().pipe(map((data) => data.items));
    //this.firebaseService.read_Items().pipe(map((data) => data.items))
    /*
        this.firebaseService.read_Items().subscribe((items) => {
          this.items$ = items;
        });
        */


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
}
