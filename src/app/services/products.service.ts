import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }
  AllProducts: Product[];


  getProducts() {
    return this.AllProducts;

  }
  async getIntialProducts() {
    this.AllProducts = await this.httpClient.get<Product[]>("assets/data.json").toPromise();
    return this.AllProducts;
  }

  async getProductsByCategory(category: string) {
    // this.AllProducts = await this.httpClient.get<Product[]>("assets/data.json").toPromise();
    var products = this.AllProducts.filter((data) => data.category.toLowerCase().includes(category.toLowerCase()))
    return products;

  }

  updateProduct(product: Product): string {
    try {
      var map = this.AllProducts.map((data) => {
        if (data.id == product.id) {
          data = product;
        }
        return data
      })

      this.AllProducts = map;
      return "SuccessFully Updated"
    }
    catch (error) {
      return "Update Failed"
    }
  }

  addNewProduct(product: Product) {
    try {
      var length = this.AllProducts.length;
      product.id = length + 1;
      this.AllProducts.push(product)
      return "SuccessFully Added"
    }
    catch (error) {
      return "Failed"
    }
  }

  deleteProducts(products: Product[]): string {

    try {
      var temp = this.AllProducts
      products.forEach((data) => {
        temp.map((array, index) => {
          if (array.id == data.id) {


            this.AllProducts.splice(index, 1)
          }
        })
      })


      return "SuccessFully Deleted"
    } catch (error) {
      return "Failed"

    }

  }
}
