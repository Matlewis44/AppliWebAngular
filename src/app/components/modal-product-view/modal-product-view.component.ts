import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.css']
})
export class ModalProductViewComponent implements OnInit {
  @Input() leProduit: Product | undefined   //"undefined" s'il est vide

  @Output() close : EventEmitter<Product> = new EventEmitter<Product>() //Envoie de "string" au père en cliquant sur bouton
  constructor() { }

  ngOnInit(): void {
  }
  closeModal(){
    this.close.emit()
    }

}
