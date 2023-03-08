import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm !: FormGroup;
  constructor( ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl("", [Validators.email, Validators.required]),
      password : new FormControl("", Validators.required)
    })
  }

  loginSubmit(){

  }
}