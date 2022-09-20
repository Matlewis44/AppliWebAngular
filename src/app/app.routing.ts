import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContainerComponent } from './components/container/container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductComponent } from './components/product/product.component';

export const ROUTES : Routes = [
  {
    path: '', //le composant racine
    component: ContainerComponent,
    pathMatch: 'full'// C'est exactement pour ce chemin
  },
  {
    path: 'product/:slug', //route qui permet d'avoir nos produits avec le nom en précision (meilleur réferencement que l'id)
    component: ProductComponent,
    //pathMatch: 'full'// C'est exactement pour ce chemin

    /** ROUTING AVANCE
     * Ici on crée les enfant qui se gréfferont dans le chemin 'product/:slug/...'
     */
    children:[
      {
        path:"",
        redirectTo: "description",
        pathMatch: "prefix"
      },
      {
        path:"description",
        component: ProductDescriptionComponent
      },
      {
        path:"additional-info",
        component: ProductAdditionalInfoComponent
      },
      {
        path:"vendor-info",
        component: ProductVendorComponent
      },
      {
        path:"reviews",
        component: ProductReviewsComponent
      }
    ]
  },
  {
    path: 'product', //route qui permet d'avoir nos produits avec le nom en précision (meilleur réferencement que l'id)
    component: ProductComponent,
    pathMatch: 'full'// C'est exactement pour ce chemin
  },
  {
    path: 'contact', //route qui permet d'avoir nos produits avec le nom en précision (meilleur réferencement que l'id)
    component: ContactComponent,
    pathMatch: 'full'// C'est exactement pour ce chemin
  },
  {
    path: 'signin', //pour le chemin signin
    component: SigninComponent, // On affichera le composant signin
    pathMatch: 'full'// C'est exactement pour ce chemin
  },
  {
    path: 'signup', //le composant signup
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: '**', //Un composant qui n'existe pas rejoindra ce component ci-dessous
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
]
