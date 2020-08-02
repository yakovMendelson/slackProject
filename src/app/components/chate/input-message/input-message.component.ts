import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetDetailsService } from 'src/app/servies/get-details.service';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent implements OnInit {

  constructor(private firestore: AngularFirestore , private getDetailsSER :GetDetailsService) { }

  ngOnInit(): void {
  }

  send(mes){
    this.firestore.collection('messages').add({date:new Date,message:mes.value,name:this.getDetailsSER.getNameUser()})
    mes.value=''
  }
  

}
