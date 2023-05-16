import { ProductsService } from './../../Services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Good } from 'src/app/Interfaces/products';
import { CartService } from '../../Services/cart.service';
import AuthService from 'src/app/Services/authentication.service';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
 goods: Good[] = []
 goodsObservable: Subscription = new Subscription;
 add: number = -1
 constructor(private gs: ProductsService, private cs: CartService, private as: AuthService, private router: Router) { }
 ngOnInit() {
 this.goodsObservable = this.gs.getAllGoods().subscribe((data: any[]) => {
 this.goods = data.map(element => {
 return {
 id: element.payload.doc.id,
 ...element.payload.doc.data()
 }
 })
 })
 }
 ngOnDestroy() {
 this.goodsObservable.unsubscribe()
 }
 addToCart(index: number) {
 if(this.as.userId) this.add = +index;
 else this.router.navigate(['/login']);
 }
 buy(amount: number) {
 let selectedGood = this.goods[this.add]
 let data = {
 name: selectedGood.name,
 amount: +amount,
 price: selectedGood.price
 }
 this.cs.addToCart(data).then(() => this.add = -1)
 }
}
