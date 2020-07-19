import { Component, OnInit } from '@angular/core';
import { GetHttpService } from 'src/app/servies/get-http.service';


@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {
a
  constructor( private http:GetHttpService) { }

  ngOnInit(): void {
   this.a= this.http.getAllData()
  }


}
