import { Injectable } from '@angular/core';
import { UserPasswordSERService } from './user-password-ser.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
readyDeatils:Subject<null>=new Subject()
userReady:Subject<string[]>=new Subject();
  constructor(private usersSER :UserPasswordSERService) { }


  getAllUsers(){
      this.usersSER.users.subscribe(data=>{
        let users:string[]=[];
        data.forEach(d => {
          users.push(d.user);
        }); 
        this.userReady.next(users);
      })
  }

  getNameUser(){
      return this.usersSER.getnameUser()
  }

  getNameAdress(){
    return this.usersSER.getNameAdress()
  }
}
