import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pets-and-plants',
  templateUrl: './pets-and-plants.page.html',
  styleUrls: ['./pets-and-plants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PetsAndPlantsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
