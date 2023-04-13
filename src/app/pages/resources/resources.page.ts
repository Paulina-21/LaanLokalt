import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';

@Component({
  selector: 'app-resources',
  templateUrl: 'resources.page.html',
  styleUrls: ['resources.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class ResourcesPage implements OnInit {

  constructor( private modalController : ModalController) { }

  ngOnInit() {
  }

  async openPostForm(){
    const modal = await this.modalController.create({
      component: PostFormComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
