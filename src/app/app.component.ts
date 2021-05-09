import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/User';
import { ProductsService } from './services/products.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopBridge';
  user : User = new User();
  success:string;
  constructor(private router: Router, private userService: UserService,private productService:ProductsService) {

  }
  search(searchQuery) {
    this.router.navigate(['/home'], { queryParams: { search: searchQuery } });
  }

login(){
  this.success = this.userService.login(this.user);
  console.log(this.success)
  this.user.admin = this.userService.isAdmin();
  }

  ngOnInit(): void {
    this.getIntialProducts();



  }
  async getIntialProducts(){
    await this.productService.getIntialProducts().then()
  }

}
