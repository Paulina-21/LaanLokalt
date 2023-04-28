import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule]
})
export class LoginPage implements OnInit {


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }
  login(form) {
    /* this.userService.getUsers(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    }); */
  }

}

