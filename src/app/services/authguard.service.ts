import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public user: UserService, public router: Router) { }

  canActivate(): boolean {
    if (!this.user.isAdmin()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
   
}
