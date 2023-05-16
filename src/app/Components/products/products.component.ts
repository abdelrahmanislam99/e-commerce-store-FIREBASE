import { ProductsService } from './../../Services/products.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  // position: number;
  // weight: number;
  // symbol: string;
  id: number;
  title: string;// name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: string
}


let ELEMENT_DATA: PeriodicElement[]= []


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  constructor(private _productService:ProductsService) {
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(data=>{
      console.log(data)
      ELEMENT_DATA=data
    })
  }

  displayedColumns: string[] = ['id', 'title', 'price', 'description',"category","image","rating"];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
