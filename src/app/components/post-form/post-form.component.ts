import { Component, EventEmitter, Output, NgModule} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FilterTag, IItem} from 'src/app/interfaces/item';
import {SharedModule} from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent{

  @Output() formSubmit=new EventEmitter();

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private modalController: ModalController
    // private db: AngularFireDatabase
    ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required], //food, tool, etc.
      filterTag: [FilterTag.offered, Validators.required], //offered, wanted
      address: ['', [Validators.required, Validators.minLength(6)]],
      postNummer: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
      price: [''],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost : IItem = {
        ItemId: new Date().getTime(),
        Title: this.postForm.value.title,
        Description: this.postForm.value.description,
        Image: "https://picsum.photos/200/300",
        CreatedDate: new Date(),
        Type: this.postForm.value.type,
        FilterTag: this.postForm.value.filterTag,
        Address: this.postForm.value.address,
        UserId: 1,
        Price: this.postForm.value.price
      }
      //this.db.list('items').push(newPost);
      // this.formSubmit.emit(this.postForm.value);
      this.modalController.dismiss(this.postForm.value, 'confirm')
      console.log(newPost);
    }
  }

  onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }
}
