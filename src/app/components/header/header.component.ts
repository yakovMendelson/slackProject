import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from 'src/app/servies/get-details.service';
import { UserPasswordSERService } from 'src/app/servies/user-password-ser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user
  constructor(private UserNameSER:GetDetailsService,private userRedySER:UserPasswordSERService) { }

  ngOnInit(): void {
    this.userRedySER.userReady.subscribe(()=>{
        this.user=this.UserNameSER.getNameUser()
    }
    )
  }
  

}
