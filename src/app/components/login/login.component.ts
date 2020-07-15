import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserPasswordSERService } from 'src/app/servies/user-password-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formGrop:FormGroup= new FormGroup({user: new FormControl('',[Validators.email,Validators.required]),
  password: new FormControl('',[Validators.maxLength(16),Validators.minLength(8),Validators.required])});


  constructor(private UserPasswordSER:UserPasswordSERService, private router:Router) {
    console.log('constractor')
    
    
  }

  ngOnInit(): void {
 
    
  }

  login(){
    if(this.formGrop.controls.user.value==this.UserPasswordSER.user && this.formGrop.controls.password.value==this.UserPasswordSER.password ){
       this.router.navigate(['chate']);
       this.UserPasswordSER.approval=true;
    }
   else{
     this.formGrop.controls.user.setValue('')
     this.formGrop.controls.password.setValue('')
   alert('הפרטים לא מזוהים');
   
  }
  }

}


class Permissions {
  canActivate(user: string, password: string): boolean {
    return true;
  }
}