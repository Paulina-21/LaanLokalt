import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatabaseService } from 'src/app/services/database.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class RegisterPage implements OnInit {

  constructor(private userService: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  register(form) {
    /* this.userService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    }); */
  }

}
