import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllproductRoutingModule } from './allproduct-routing.module';
import { AllproductComponent } from './allproduct.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AllproductComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AllproductRoutingModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule
    
  ]
})
export class AllproductModule { }
