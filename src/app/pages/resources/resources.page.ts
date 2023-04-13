import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import {DatabaseService} from '../../services/database.service';
import { Observable, map } from 'rxjs';
import {IItem} from 'src/app/interfaces/item';
import { RouteReuseStrategy } from '@angular/router';
import { DetailsModalComponent } from 'src/app/components/details-modal/details-modal.component';


@Component({
  selector: 'app-resources',
  templateUrl: 'resources.page.html',
  styleUrls: ['resources.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})

export class ResourcesPage implements OnInit {
  items$: Observable<any>;

  constructor(private itemservice: DatabaseService, private modalcontroller :  ModalController)  {}

  ngOnInit() {
    this.items$= this.itemservice.getData().pipe(map((data) => data.items));
  }

  async openDetails(item : IItem){
    const modal = await this.modalcontroller.create({
      component: DetailsModalComponent,
      componentProps: {
        selectedItem: item
      }
    });
    modal.present();
  }


  
}
