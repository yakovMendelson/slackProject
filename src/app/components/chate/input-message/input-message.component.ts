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
 nameAdress
  ngOnInit(): void {
    this.getDetailsSER.readyDeatils.subscribe(()=>  this.nameAdress=this.getDetailsSER.getNameAdress())
  }

  send(mes){
    let d=JSON.stringify(new Date) 
    this.firestore.collection('messages').doc(d).set({date:d,message:mes.value,name:this.getDetailsSER.getNameUser(),nameAdress:this.nameAdress})
    mes.value=''
  }
  

}
