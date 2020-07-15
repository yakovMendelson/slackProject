import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserPasswordSERService } from './user-password-ser.service';

@Injectable({
  providedIn: 'root'
})
export class GradService implements CanActivate {

  constructor(private router: Router, private bol: UserPasswordSERService) { }
  canActivate(router) {
    if (!this.bol){
      return false
    }
    else
    return true
      
  }

}
