/*Ceci est une interface, comme en java, elle s'implémente dans une autre classe
myCompo.compo.ts qui l'implémente*/

export interface Slide {
  _id?: string,
  slug?: string,
  imageUrl: string,
  name?: string,
  description?: string
}
