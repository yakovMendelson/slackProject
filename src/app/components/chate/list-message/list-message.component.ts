import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDetailsService } from 'src/app/servies/get-details.service';
import { Subscription, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserPasswordSERService } from 'src/app/servies/user-password-ser.service';



@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit, OnDestroy {

  constructor(private detailsSER: GetDetailsService, private firestore: AngularFirestore, private dataSER: UserPasswordSERService) { }

  users
  mmory: Subscription;


  ngOnInit(): void {
    this.detailsSER.readyDeatils.subscribe(() => {
      this.firestore.collection('messages').valueChanges().subscribe(messages => {
        let mesTemp: any[] = [];
        messages.forEach(mes => {

          if (mes['name'] == this.dataSER.getnameUser() && mes['nameAdress'] == this.dataSER.getNameAdress() ||
            mes['name'] == this.dataSER.getNameAdress() && mes['nameAdress'] == this.dataSER.getnameUser())
            mesTemp.push(mes)
        })
        this.dataSER.setMessage(mesTemp)
      })
    })
    this.detailsSER.getAllUsers();
    this.mmory = this.detailsSER.userReady.subscribe(data =>
      this.users = data)
  }
  details(_name) {
    this.dataSER.nameUserAdresse = _name;
    this.detailsSER.readyDeatils.next();
  }

  ngOnDestroy(): void {
    this.mmory.unsubscribe()
  }


}
