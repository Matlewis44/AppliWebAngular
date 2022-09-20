/*Ceci est une interface, comme en java, elle s'implémente dans une autre classe
myCompo.compo.ts qui l'implémente*/

export interface Item {
  _id?: string,
  slug?: string,
  path: string,
  name: string
}
