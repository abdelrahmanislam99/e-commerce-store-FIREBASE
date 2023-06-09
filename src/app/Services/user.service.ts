import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import AuthService from './authentication.service';
@Injectable({
 providedIn: 'root'
})
export class UserService {
 constructor(private fs: AngularFirestore, private as: AuthService) {
}
 addNewUser(id: string, name: string | undefined, address: string | undefined) {
 return this.fs.doc('users/' + id).set({
 name,
 address
 })
 }
 getUserData() {
 return this.fs.doc('users/' + this.as.userId).valueChanges()
 }
}
