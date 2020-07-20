import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ModelUsers } from '../models/model-users';




@Injectable({
  providedIn: 'root'
})
export class GetHttpService {
allData:ModelUsers[];

dataReday:Subject<ModelUsers[]> =new Subject<ModelUsers[]>()
  constructor(private http: HttpClient) {
     this.getAllMessage().subscribe((data:ModelUsers[]) => this.allData=data)
    }
  
 

  getAllDataUsers() {
    return this.get(`https://5f14562a2710570016b37eb8.mockapi.io/users`)
  }

  getAllMessage() {
    return this.get(`https://5f14562a2710570016b37eb8.mockapi.io/message`)
  }

  getMessageById(id) {
    let a= this.allData.filter(d=>d['id']==id)
    this.dataReday.next(a);
  }



  get(url) {
    return this.http.get(url);
  }
}
