import { Component, OnInit } from '@angular/core';
import { FilterTag, IItem, Type } from 'src/app/interfaces/item';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ItemComponent implements OnInit {

  constructor() {

  }
  item: IItem | undefined;

  ngOnInit() { }

}
