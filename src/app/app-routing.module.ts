import { ProductsComponent } from './Components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldErrorExample } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { GoodsComponent } from './Components/goods/goods.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {index: 0} },
  { path: 'signup', component: SignUpComponent, data: {index: 2} },
  { path: 'cart', component: CartComponent, data: {index: 3} },
  { path: 'admin', component: GoodsComponent,  data: {index: 4} },
  {path:"", component:FormFieldErrorExample},
  {path:"login", component:FormFieldErrorExample},
  {path:"products", component:ProductsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
