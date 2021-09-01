import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from '../core/services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar,
    private registerService : RegisterService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    } else {
      this.registerService.setData(this.registerForm.value);
      this._snackBar.open('Register Successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/login']);
    }
  }
}
