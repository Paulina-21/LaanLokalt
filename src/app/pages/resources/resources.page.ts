import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {DatabaseService} from '../../services/database.service';
import { Observable, map } from 'rxjs';
import {IItem} from 'src/app/interfaces/item';
import { DetailsModalComponent } from 'src/app/components/details-modal/details-modal.component';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';

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

  constructor(private itemService: DatabaseService, private modalController :  ModalController)  {}

  ngOnInit() {
    this.items$= this.itemService.getData().pipe(map((data) => data.items));
  }

  async openPostForm(){
    const modal = await this.modalController.create({
      component: PostFormComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
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
