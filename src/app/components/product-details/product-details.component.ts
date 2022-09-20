import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product : Product | undefined

  constructor() { }

  ngOnInit(): void {
  }

  //Appel du composant comportant le contenu (description ou vendor ou additional-info ou reviews)
  handleChangeDetails(component: any){
    component.product = this.product
  }

}
