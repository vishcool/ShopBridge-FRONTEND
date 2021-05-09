import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'category/:category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
{ path: 'admin', 
children:[{ path: 'allproduct', loadChildren: () => import('./admin/allproduct/allproduct.module').then(m => m.AllproductModule)}
,{path:'**',redirectTo:'allproduct'},

],canActivate:[AuthguardService]
},
{path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
