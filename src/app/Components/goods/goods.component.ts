import { ProductsService } from './../../Services/products.service';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core"
import { NgForm } from '@angular/forms';
import { Good } from '../../Interfaces/products';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image')
  image!: ElementRef;

  constructor(private gs: ProductsService) { }

  ngOnInit() {}

  addNewGood(form: NgForm) {
  let name : string | any = (<Good>form.value).name,
  price : number | any = (<Good>form.value).price,
  image = (this.image.nativeElement).files[0];
  this.gs.addNewGood(name, price, image).then(msg => console.log(msg)
 )
  }

}
