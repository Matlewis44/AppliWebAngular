import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  //Le fils "item" reçoit des données du père "list", c'est donc action Intput
  @Input() pipi: Product | undefined

  //On crée une sortie vers le component "père"
  //Le EventEmitter doit provenir d'angular/core "Hyper important"
  @Output() supprimerProduit: EventEmitter<Product> = new EventEmitter<Product>()

  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.pipi);
  }

  handleClickProduct(leProduit: Product | undefined){
    //console.log(LeProduit);
    this.displayProductViewModal.emit(leProduit)
  }
  deleteProduct(leProduit: Product | undefined){
  //this.supprimerProduit.emit(leProduit)
  }

}
