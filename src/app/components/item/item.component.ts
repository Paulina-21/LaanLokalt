import { Component, OnInit, Input } from '@angular/core';
import { FilterTag, IItem, Type } from 'src/app/interfaces/item';
import { IonDatetime, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // Mark added this line
})
export class ItemComponent implements OnInit {

  @Input() item : IItem;

  constructor(private itemService: DatabaseService) {}

  ngOnInit() {

  }

}
