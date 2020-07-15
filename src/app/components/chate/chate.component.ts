import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chate',
  templateUrl: './chate.component.html',
  styleUrls: ['./chate.component.css']
})
export class ChateComponent implements OnInit {
  // arr:number[]=[1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

  // add():void{
  //   this.arr.push(Math.floor(Math.random() * 11))
  //   console.log(this.arr);
  // }
}
