import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  slug: string | undefined
  currentImage: string | undefined
  product: Product | undefined
  productSub: Subscription | undefined
  isLoading: boolean = true

  constructor(private route: ActivatedRoute, private productService: ProductService) { }


  ngOnInit(): void {
    window.scrollTo(0,0) //Pour revenir vers le haut dès qu'on arrive sur la page
    this.slug = this.route.snapshot.params["slug"]
    //on reçoit un observable contenant des produits
    this.productSub = this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.product = products.filter(i => i.slug === this.slug)[0]
        this.currentImage = this.product.imageUrl[0] //on initilaise l'image actuel sur la première
        this.isLoading = false //Si on trouve des produits, on fait rien
      },
      error: (error: any ) => {
        console.log("Error : ", error);
        this.isLoading = true
      }
    })
  }

  ngOnDestroy(): void{
    this.productSub?.unsubscribe()
  }

  handleChangeCurrentImage(url: string){
    this.currentImage = url
  }
}


