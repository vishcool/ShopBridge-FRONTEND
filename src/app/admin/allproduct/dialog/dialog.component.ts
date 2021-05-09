import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  delete: boolean = false
  product: Product = new Product();
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { products: Product[], type: string }, private productService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data.type.includes("add"))
      this.product = new Product();

    else if (this.data.type.includes("update"))
      this.product = this.data.products[0];

    else{
      this.delete = true
      console.log(this.data)
    }
  }

  onFormSubmit() {
    var data;
    if (this.data.type.includes("add"))
      data = this.productService.addNewProduct(this.product)
    else
      data = this.productService.updateProduct(this.product)


    this.onNoClick(data)

  }
  onNoClick(data:string): void {
    this.dialogRef.close(data);
  }


  Delete() {
    var data = this.productService.deleteProducts(this.data.products);
    this.onNoClick(data)
  }
}
