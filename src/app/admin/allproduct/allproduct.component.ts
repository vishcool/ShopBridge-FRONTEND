import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows: Product[] = [];
  columns = [{ name: 'ID' }, { name: 'Name' }, { name: 'Category' }, { name: 'Description' }, { name: 'Price' },{name:'Image Url'}];
  temp: Product[] = [];
  selected = [];
  allProduct: Product[] = [];
  checked: boolean = false;
  constructor(private productService: ProductsService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  loading: boolean = false;

  ngOnInit(): void {

    this.getProducts();



  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    let temp: any = []
    // filter our data
    try {
      temp = this.temp.filter(function (d) {
        return (d.name.toLowerCase().indexOf(val) !== -1 || !val) || (d.category.toLowerCase().indexOf(val) !== -1 || !val);
      });
    } catch (error) {
      temp = this.temp
    }


    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  onSelect({ selected }) {

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  selectAll(): void {
    if (!this.checked) {
      this.selected = [...this.rows]
      this.openSnackBar("All Products Selected", null)
    }
    else
      this.selected = []
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 1000
    });

  }

  openDialog(event:string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: event.includes('delete')?'20%':'80%',
      height: event.includes('delete')?'20%':'80%',
      data: {products :this.selected ,type:event}
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.openSnackBar(result,null)
      await this.refresh()
    });


  }

  getProducts(): void {
    try {
      this.rows =   this.productService.getProducts()
       
        this.temp = this.rows
        this.allProduct = this.rows;
    
    } catch (error) {

    }
    this.loading = true;

  }

  async refresh() {
    this.loading = false;



    await this.setTimeoutPromise(500);

    this.selected = [];
    this.getProducts()

  }

  categoryChange(event: string) {



    if (event.includes("allProducts"))
      this.rows = this.allProduct;
    else {
      this.temp = this.allProduct;
      var sort = this.temp.filter((data) => {
        return data.category.toLowerCase().indexOf(event.toLowerCase()) !== -1;
      })

      this.rows = [...sort]
    }

  }

  setTimeoutPromise = timeout => new Promise(resolve => {
    setTimeout(resolve, timeout);
  });


}
