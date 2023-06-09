import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Good } from '../Interfaces/products';
import AuthService from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }

  addToCart(data: Good) {
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }

  getCart() {
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }

  delete(id: string | undefined) {
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }

  save(id: string | undefined, amount: number | undefined) {
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({
      amount
    })
  }
}
