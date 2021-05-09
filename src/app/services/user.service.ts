import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName:string;
  private password:string;
  private admin:boolean;
  constructor() { }

  login(user:User): string{
    if(user.userName === "admin" && user.password == "admin"){
        this.userName = "admin"
        this.admin = true;
        return "Login Success";
    }
    else{
      this.userName = user.userName;
      this.admin = false;
      return "Login Success";
    }
  }

  isAdmin():boolean {
    return this.admin;
  }

}
