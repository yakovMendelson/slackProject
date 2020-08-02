import { Component, OnInit } from '@angular/core';
import { ISingleUser } from 'src/app/store/ModelUsers';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/store/users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }
  user:ISingleUser
  add(id,name,phone){
      this.user={id,name,phone};
      console.log(this.user);
      
      this.store.dispatch(addUser(this.user))
  }


}
