import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class UserPasswordSERService {
  private email: string;
  private user: string;
  private password: string;
  approval: boolean = false;
  users: Observable<any>;
  userReady:Subject<null>=new Subject();

  constructor(private firestore: AngularFirestore, private router: Router) {
    this.users = this.firestore.collection('users').valueChanges()
  }

  add() {
    this.firestore.collection('users').add({ user: this.user, password: this.password, email: this.email })
    this.userReady.next()
  }


  login(email, password) {
   this.users.subscribe(data => {
      data.forEach(d => {
        if (d['email'] == email && d['password'] == password) {
          this.user=d['user'];
          this.email=d['email'];
          this.password= d['password'];
          this.approval = true;
          this.userReady.next()
          this.router.navigate(['chate']);
        }
      })
      if(!this.approval)
      alert('הפרטים לא מזוהים')
    }
    )
  }


  setUser(user){
      this.user=user
  }
  setEmail(email){
      this.email=email
  }
  setPassword(password){
      this.password=password
  }

  getnameUser(){
    return this.user
  }

}
