import { Component, OnInit } from '@angular/core';
import { FilterTag, IItem, Type } from 'src/app/interfaces/item';
import { IonDatetime, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // Mark added this line
})
export class ItemComponent implements OnInit {
  newItem: any = {
    ItemId: 13,
    Title: 'Test data',
    Description:
      'This is test data created from createItem func from item.component.ts',
    Image: 'favicon.png',
    CreatedDate: Date.now(),
    Type: 1,
    FilterTag: 1,
    Address: 'testgade 404',
    UserId: 1,
    Price: 0,
  };

  constructor(private itemService: DatabaseService) {}

  ngOnInit() {
    this.itemService.createItem(this.newItem);
  }

  createItem() {
    this.itemService.createItem(this.newItem);
    console.log(this.newItem);
  }
}
