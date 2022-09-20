import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

/*Dans ce décorateur se trouve les paramètres du composants*/
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  /*title: string = 'Rachel'
  age: number = 20
  names: string[] = ["Gildas", "Lucas"]
  date: Date = new Date()
*/
  /*Créons un tableau[] d'objets{} contenant 1 objet {}*/
  /*product: object[] = [
    {
    name: "robe pour femmes",
    description: "joli robe pour femme",
    sold_price: 1299,
    regular_price:  1899,
    isSolded: false
    }
  ]*/

 /* products: Product[] = [
    {
      name: "robe pour femmes",
      description: "joli robe pour femme",
      category:[],
      imageUrl:"",
      sold_price: 1299,
      regular_price:  1899,
      created_at: new Date()
    }
  ]*/

  isLoading: boolean = true
  isDisplayModal: boolean = false

  modalProduit: Product | undefined

  products: Product[] = [] //On définit la variable qui va comprendre les produits

  productSub: Subscription | undefined

  constructor(private productService: ProductService) {
    //this.title = "Rachtrm"
  }
  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  /*Appel des produits stockés dans le service
    this.products = this.productService.getProducts()*/
  ngOnInit(): void {
    //Si la promesse a fonctionné on alimente le tableau, sinon tab vide
    /*this.productService.getProducts()
    .then((toto: Product[]) => {
      this.products = toto})
    .catch(()=>{
      this.products = []
    })*/

    this.productSub = this.productService.getProducts()
    .subscribe({
      //tant qu'il y a des prod trouvés on remplit grâce à variable "valeur"
      next: (valeur: Product[]) => {this.products = valeur
        this.isLoading= false},

      //Pour tout type d'erreur
      error: (error: any )=>{ console.log("Error: ", error);
        this.isLoading = true
      },
      complete: ()=> {console.log("Complet !"); }
  })

  }

/*On prend la liste des produits qu'on filtre
    Pour chaque produit "p" si l'id est différent de l'id reçu en param, je le met dedans,
    Sinon on met pas
    */
  handleDeleteProduct(titi: Product){
    //this.products = this.products.filter(p => p._id !== titi._id)
    //console.log("handleDeleteProduct : ", titi);
  }
  handleDispalyProductViewModal(titi: Product){
    //Si j'ai le produit, on ouvre le modal
    if(titi){this.isDisplayModal=true}
    this.modalProduit = titi //on affecte le produit à la fenêtre modal s'il existe
  }
  handleCloseModal(titi: Product){
    //On fait disparaitre en mettant la valeur false à la fenetre
    if(titi){this.isDisplayModal = false}
    this.modalProduit = undefined //on désaffecte le produit à la fenêtre modal s'il existe
  }

}
