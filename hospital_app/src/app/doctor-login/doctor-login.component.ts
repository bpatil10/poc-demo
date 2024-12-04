import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterModule } from '@angular/router';




@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,RouterModule],
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Doctor Login Details:', this.loginForm.value);
      alert('Log in successful!');
      this.loginForm.reset();
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
    this.router.navigate(['/doctor-dashboard'])
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}