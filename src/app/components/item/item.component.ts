import { Component, OnInit } from '@angular/core';
import { FilterTag, IItem, Type } from 'src/app/interfaces/item';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // Mark added this line
})
export class ItemComponent implements OnInit {

  constructor() {

  }
  item: IItem | undefined;

  ngOnInit() { }

}
