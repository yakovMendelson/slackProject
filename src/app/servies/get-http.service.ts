import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetHttpService {

  constructor(private http:HttpClient) {}

  getAllData(){
    return this.http.get(`https://5f14562a2710570016b37eb8.mockapi.io/users`) ;
  }
}
