import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserPasswordSERService } from '../servies/user-password-ser.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginGuard implements CanActivate {
  constructor(private userApproval:UserPasswordSERService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.userApproval.approval)
      return true;
      else{
      this.router.navigate([''])
      return false
      }
  }
  
}
