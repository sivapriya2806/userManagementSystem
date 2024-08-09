import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onLogin() {
    if (this.loginForm.valid) {
      if (
        this.loginForm.value.email == 'siva123@gmail.com' &&
        this.loginForm.value.password == '1234'
      ) {
        console.log('success', this.loginForm.value);
        this.router.navigate(['/user-form']);
      }
    }
  }

  ngOnInit() {}
}
