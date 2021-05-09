import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  constructor(private productService: ProductsService, private route: ActivatedRoute) { }
  products: Product[] = [];
  completeProduct: Product[] = [];
  private searchParam: any

  ngOnInit(): void {
    this.getAllProduct();



  }


   getAllProduct() {
    this.products =  this.productService.getProducts()
    this.completeProduct = this.products;
    this.queryParamSubscribe()

  }


  queryParamSubscribe() {
    var searchQuery: any;
    this.searchParam = this.route.queryParams.subscribe((queryString) => {
      if (queryString.search) {
        searchQuery = queryString.search;
        this.getSearchProcuts(searchQuery);
      }
      else {
        this.getAllProduct()
      }
    })


  }
  getSearchProcuts(searchString: string) {
    var sort = this.completeProduct.filter((data) => {
      return data.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    })

    this.products = [...sort]
  }


  ngOnDestroy() {
    if (this.searchParam)
      this.searchParam.unsubscribe()
  }

}


