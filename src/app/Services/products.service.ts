import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from './../Components/products/products.component';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="https://fakestoreapi.com/products"

  constructor(private _http:HttpClient,private fs: AngularFirestore, private storage: AngularFireStorage) { }

  getProducts(): Observable<PeriodicElement[]> {
    return this._http.get<PeriodicElement[]>(this.url)
  }

  getAllGoods() {
    return this.fs.collection('goods').snapshotChanges()
    }

    addNewGood(name: string, price: Number, image: File) {
      return new Promise((resolve) => {
      let ref = this.storage.ref('goods/' + image.name)
      ref.put(image).then(() => {
      ref.getDownloadURL().subscribe((photoUrl: any) => {
      this.fs.collection('goods').add({
      name,
      price,
      photoUrl
      }).then(() => resolve('hello'))
      })
      })
      })
      }
}
