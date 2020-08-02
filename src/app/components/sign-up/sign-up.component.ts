import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserPasswordSERService } from 'src/app/servies/user-password-ser.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

 


  formGrop:FormGroup= new FormGroup({email: new FormControl('',[Validators.email,Validators.required]),
  password: new FormControl('',[Validators.maxLength(16),Validators.minLength(8),Validators.required]),
  user: new FormControl('',[Validators.minLength(8),Validators.required])
});


  constructor(private UserPasswordSER:UserPasswordSERService, private router:Router) {

    
    
  }

  ngOnInit(): void {
 
    
  }

  login(){

    this.UserPasswordSER.setUser(this.formGrop.controls.user.value);
    this.UserPasswordSER.setEmail(this.formGrop.controls.email.value);
    this.UserPasswordSER.setPassword(this.formGrop.controls.password.value);
    
    this.UserPasswordSER.add();
     this.UserPasswordSER.approval=true;  
      this.router.navigate(['chate']);
  }
  }


