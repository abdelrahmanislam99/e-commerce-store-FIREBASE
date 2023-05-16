import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Shopping } from '../../Interfaces/shopping';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = []

  constructor(private cs: CartService) { }

  ngOnInit() {
    this.cs.getCart().subscribe((cart: any[]) => {
      this.cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          ...shopping.payload.doc.data()
        }
      })
    })
  }

  delete(index: number) {
    this.cs.delete(this.cart[index].id)
  }

  save(index: number) {
    this.cs.save(this.cart[index].id, this.cart[index].amount)
  }

}
