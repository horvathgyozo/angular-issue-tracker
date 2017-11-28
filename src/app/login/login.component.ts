import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    try {
      this.message = "Try to login!";
      await this.authService.login(this.user);
      this.router.navigate([this.authService.redirectUrl || '/issues']);
    }
    catch (err) {
      this.message = "Login failed!";
      console.log(err);
    }
  }

}
