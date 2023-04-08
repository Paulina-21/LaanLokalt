import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatabaseService } from './../../services/database.service';
import { IItem } from 'src/app/interfaces/item';
import { RouteReuseStrategy } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class FoodPage implements OnInit {
  items$: Observable<any>;

  constructor(private itemService: DatabaseService) {}

  ngOnInit() {
    this.items$ = this.itemService.getData().pipe(map((data) => data.items));
  }
}
