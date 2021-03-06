import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserPasswordSERService } from 'src/app/servies/user-password-ser.service';
import { messaging } from 'firebase';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-history-message',
  templateUrl: './history-message.component.html',
  styleUrls: ['./history-message.component.css']
})
export class HistoryMessageComponent implements OnInit,OnDestroy{


  constructor(private users: UserPasswordSERService) { }
  
  messages
  mmory:Subscription
  ngOnInit(): void {
    this.mmory= this.users.mesReady.subscribe(messages=>{
      this.messages=messages
    })
  }
  
filter(name){
  return name==this.users.getnameUser()
}

  ngOnDestroy(): void {
        this.mmory.unsubscribe()
  }

}






