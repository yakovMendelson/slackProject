import { Component, OnInit } from '@angular/core';
import { GetHttpService } from 'src/app/servies/get-http.service';

@Component({
  selector: 'app-history-message',
  templateUrl: './history-message.component.html',
  styleUrls: ['./history-message.component.css']
})
export class HistoryMessageComponent implements OnInit {

  constructor(private http:GetHttpService) { }
  data
  ngOnInit(): void {
    this.http.dataReday.subscribe((data)=>this.data=data)
  }


}
