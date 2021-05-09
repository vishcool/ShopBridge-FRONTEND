import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute,private productService: ProductsService) { }
  category:string;
  products :Product[] = []
  p: number = 1;

  ngOnInit(): void {

    this.route.params.subscribe(async (data)=>{
      this.category = data.category  
      this.products = await this.productService.getProductsByCategory(this.category).then();
    })

}

}
