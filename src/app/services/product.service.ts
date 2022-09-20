/*Une classe Typescript implémentable*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../components/models/product';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private produits: Product[] =  []

  private urlApi: string = environment.serverURL

  constructor(private http: HttpClient) { }
/*Promesse pour tech asynchrone, si le serveur envoie les données,
alors on alimente le tableau, sinon renvoie tab vide*/
  /*getProducts(): Promise<Product[]>{
    return new Promise((resolve, reject) =>{
      if(this.produits.length){
        resolve(this.produits)
      }else{
        reject([])
      }
    })
  }*/

  getProducts(): Observable<Product[]>{
    /*GET => récuperer les données, POST => Envoie de données,
    PUT et PATCH => Modification des données existantes sur le hub, DELETE => Supprimer les données...*/
    return this.http.get<Product[]>(this.urlApi);
  }

  getNumber(): Observable<Number>{
    return of(45)
  }
  /*getSecond(): Observable<Number>{
    chrono toute les 1000 milisecondes
    return interval(1000)
  }*/

  addProducts(prod: Product){

  }
  editProduct(_id: string, prod: Product){

  }
  deleteProduct(_id: string){

  }


}
