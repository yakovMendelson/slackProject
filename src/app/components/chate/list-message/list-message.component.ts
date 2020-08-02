import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from 'src/app/servies/get-details.service';



@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

  constructor(private usersSER:GetDetailsService) { }
  users
  ngOnInit(): void {
    this.usersSER.getAllUsers();
    this.usersSER.userReady.subscribe(data=>
      this.users=data)

    
  }
  details(id){
  
  }

  

}
