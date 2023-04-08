import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DatabaseService } from 'src/app/services/database.service';
import { IItem } from 'src/app/interfaces/item';
import { ItemComponent } from 'src/app/components/item/item.component';

@Component({
  selector: 'app-pets-and-plants',
  templateUrl: './pets-and-plants.page.html',
  styleUrls: ['./pets-and-plants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, ItemComponent]
})
export class PetsAndPlantsPage implements OnInit {

  plantsAndAnimals : IItem[] = []

  constructor(private animalService : DatabaseService) { }

  ngOnInit() {
    this.animalService.getPlantsAndAnimals().subscribe(
      data=>{
        this.plantsAndAnimals = data;
      }
    )
  }

}
