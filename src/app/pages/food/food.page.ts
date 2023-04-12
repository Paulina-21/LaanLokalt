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

@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class FoodPage implements OnInit {
  items$: Observable<any>;

  constructor(private itemService: DatabaseService, private modalController : ModalController) {}

  ngOnInit() {
    this.items$ = this.itemService.getData().pipe(map((data) => data.items));
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
}
