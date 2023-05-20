import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestoreModule,
  FirestoreSettingsToken,
} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormFieldErrorExample } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MatTableModule } from '@angular/material/table';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { GoodsComponent } from './Components/goods/goods.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldErrorExample,
    ProductsComponent,
    PageNotFoundComponent,
    SignUpComponent,
    HomeComponent,
    CartComponent,
    GoodsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAl3FYrOt2PKe1kPJUdQ4otzBikI8CZJNQ",
      authDomain: "e-commerce-store-99252.firebaseapp.com",
      projectId: "e-commerce-store-99252",
      storageBucket: "e-commerce-store-99252.appspot.com",
      messagingSenderId: "622318229668",
      appId: "1:622318229668:web:cc9274117c8edfe1b06e31",
      measurementId: "G-B7L49XWKQW"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
