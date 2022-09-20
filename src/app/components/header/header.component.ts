import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { auth_items, nav_items } from 'src/app/api/nav';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  data: Number | undefined
  second: Number | undefined
  secondSub: Subscription | undefined //Empeche l'observable de tourner en arrière-plan (performance)
  siteName: string = environment.siteName
  nav_items: Item[] = nav_items
  auth_data: Item[] = auth_items //on appel la constante auth_items qu l'on met dans auth_data
  isDisplayMobileMenuNav: boolean = false

  constructor(private productService:  ProductService) { }

  ngOnInit(): void {
    //On s'abonne à lObserb=vable et j'écoute
    /*this.productService.getNumber()
    .subscribe((value) =>{
      //A chaque changement de valeur on rentre ici
      this.data = value
    })*/

    /*this.secondSub = this.productService.getSecond()
    .subscribe( {
      next: (valeur: Number) => {this.second = valeur },
      error: (error: any )=>{ console.log(error); },
      complete: ()=> {console.log("Complet"); }
  })*/
}

  //Destruction de l'observable, préserve ressource mémoire et l'interactivité de l'appli
  ngOnDestroy(): void {
    this.secondSub?.unsubscribe();
  }

  handleDisplayMobileNav(){
    //console.log(this.isDisplayMobileMenuNav);
    this.isDisplayMobileMenuNav = !this.isDisplayMobileMenuNav
  }
  handleCloseMobileNav(){
    this.isDisplayMobileMenuNav = false
  }

}
