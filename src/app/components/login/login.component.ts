import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserPasswordSERService } from 'src/app/servies/user-password-ser.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 users;
  formGrop: FormGroup = new FormGroup({
    email: new FormControl('yakov.m1994@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('313122673', [Validators.maxLength(16), Validators.minLength(8), Validators.required])
  });


  constructor(private UserPasswordSER: UserPasswordSERService) {



  }

  ngOnInit(): void {
   
  }

  login() {
    this.UserPasswordSER.login(this.formGrop.controls.email.value,this.formGrop.controls.password.value)

  }

}
