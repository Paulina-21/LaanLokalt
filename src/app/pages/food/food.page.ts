import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DatabaseService } from './../../services/database.service';
import { IItem } from 'src/app/interfaces/item';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-food',
  templateUrl: 'food.page.html',
  styleUrls: ['food.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent],
})
export class FoodPage implements OnInit {
  itemList: IItem[];

  constructor(private itemService: DatabaseService) {}

  ngOnInit() {
    this.itemService.readJsonFile().subscribe((data) => {
      this.itemList = this.itemList;
    });
    //this.getItems();
  }

  getItems(): void {
    this.itemService
      .readJsonFile()
      .subscribe((items) => (this.itemList = items));
  }
}
