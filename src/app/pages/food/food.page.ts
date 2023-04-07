import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatabaseService } from './../../services/database.service';
import { IItem } from 'src/app/interfaces/item';
import { RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class FoodPage implements OnInit {
  constructor(private itemService: DatabaseService) {}

  ngOnInit() {
    //this.getItems();
  }

  itemList: IItem[];

  getItems(): void {
    this.itemService
      .readJsonFile()
      .subscribe((items) => (this.itemList = items));
  }
}
