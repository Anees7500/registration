import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private loginService: LoginService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('invalid')
      return;
    }
    if (this.loginService.login(this.loginForm.value)) {
      this._snackBar.open('Login Successful', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/'])
    } else {
      this._snackBar.open('Error Login', 'OK', {
        duration: 2000,
      });
      this.router.navigate(['/login']);
    }
  }
}
