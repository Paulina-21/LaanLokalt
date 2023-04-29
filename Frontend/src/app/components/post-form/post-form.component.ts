import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { FilterTag, IItem } from 'src/app/interfaces/item';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ItemsserviceService } from 'src/app/services/itemsservice.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Output() formSubmit = new EventEmitter();

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private db: FirebaseService,
    public toastController: ToastController,
    private itemsService: ItemsserviceService
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required], //food, tool, etc.
      image: [Validators.required], //select image
      filterTag: [FilterTag.offered, Validators.required], //offered, wanted
      address: ['', [Validators.required, Validators.minLength(6)]],
      postNummer: [
        '',
        [
          Validators.required,
          Validators.min(1000),
          Validators.max(9999),
          Validators.maxLength(4),
        ],
      ],
      price: [0],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost: IItem = {
        ItemId: new Date().getTime(),
        Title: this.postForm.value.title,
        Description: this.postForm.value.description,

        Image: this.returnImage(),

        CreatedDate: new Date(),
        Type: this.postForm.value.type as number,
        FilterTag: this.postForm.value.filterTag as number,
        Address: this.postForm.value.address,
        UserId: 1,
        Price: this.postForm.value.price as number,
      };

      this.itemsService.createNewItem(newPost).subscribe((i) => {
        if (i) {
          this.modalController.dismiss(this.postForm.value, 'confirm');
          this.presentToast();
          console.log(newPost);
        }
      });
    }
  }

  returnImage() {
    if (this.postForm.value.image == 1) return 'vegetable-outline.png';
    else if (this.postForm.value.image == 2) return 'fruit-outline.png';
    else return 'bread-outline.png';
  }

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Indlæg oprettet!',
      duration: 3000, // milliseconds
      position: 'top', // 'top', 'middle', or 'bottom'
    });
    toast.present();
  }
}
