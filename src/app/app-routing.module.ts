import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
;
import { ViewPROComponent } from './view-pro/view-pro.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path:'',component:AllProductsComponent
  },
  {
    path:'view/:id',component:ViewPROComponent
  },
  {
    path: 'user/register',component:RegisterComponent
  },
 {
  path:'user/cart',component:CartComponent
 },{
  path:'user/wishlist',component:WishlistComponent
 },
 {
  path:'user/login',component:LoginComponent
 },
{
  path:'**',component:PageNotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
