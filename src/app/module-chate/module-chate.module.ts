import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMessageComponent } from '../components/chate/list-message/list-message.component';
import { InputMessageComponent } from '../components/chate/input-message/input-message.component';
import { ContanChateComponent } from '../components/chate/contan-chate/contan-chate.component';
import { HistoryMessageComponent } from '../components/chate/history-message/history-message.component';
import { AddUserComponent } from '../components/add-user/add-user.component';



@NgModule({
  declarations: [
    HistoryMessageComponent ,
    ContanChateComponent,
    InputMessageComponent,
    ListMessageComponent,
    AddUserComponent
  ],
  exports:[
    ContanChateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleChateModule { }
