import { Component, EventEmitter, Output, NgModule} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FilterTag} from 'src/app/interfaces/item';
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

  constructor(private formBuilder: FormBuilder, private modalController: ModalController) {
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
    console.log("clicked");
    console.log("form valid: " + this.postForm.valid);
    if (this.postForm.valid) {
      this.formSubmit.emit(this.postForm.value);
      this.modalController.dismiss(null, 'cancel');
      console.log(this.postForm.value);
    }
  }

  onCancel() {
    console.log("cancel");
    this.modalController.dismiss(null, 'cancel');
  }
}
