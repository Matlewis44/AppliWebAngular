let products =[
  {
    _id: '0001',
    name: "Chemise à imprimé géométrique",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 1/chemise 1.webp",
      "../assets/img/product/chemise 1/chemise 2.webp",
      "../assets/img/product/chemise 1/chemise 3.webp",
      "../assets/img/product/chemise 1/chemise 4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//1
  {
    _id: '0002',
    name: "Chemise à bouton",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "https://img.ltwebstatic.com/images3_pi/2022/05/20/1653013879611055e0b401c242868101dc1cf3719b_thumbnail_900x.webp",
      "https://img.ltwebstatic.com/images3_pi/2022/05/20/165301388165a3e6914307f9e8cd00106433ba31e7_thumbnail_900x.webp",
      "https://img.ltwebstatic.com/images3_pi/2022/05/20/1653013883b361db2354779ce6a963954ed6b4dacf_thumbnail_900x.webp",
      "https://img.ltwebstatic.com/images3_pi/2022/05/20/1653013887c0869a7d7703d628fa99b7e93724f581_thumbnail_900x.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//2
  {
    _id: '0003',
    name: "Chemise unicolore",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 3/1.png",
      "../assets/img/product/chemise 3/2.png",
      "../assets/img/product/chemise 3/3.png",
      "../assets/img/product/chemise 3/4.png"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//3
  {
    _id: '0004',
    name: "Chemise avec boutons",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 4/1.webp",
      "../assets/img/product/chemise 4/2.webp",
      "../assets/img/product/chemise 4/3.jpg",
      "../assets/img/product/chemise 4/4.jpg"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//4
  {
    _id: '0005',
    name: "Chemise à bouton",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 5/1.webp",
      "../assets/img/product/chemise 5/2.webp",
      "../assets/img/product/chemise 5/3.webp",
      "../assets/img/product/chemise 5/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//5
  {
    _id: '0006',
    name: "Chemise à imprimé graphique patch à poche (sans t-shirt)",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 6/1.webp",
      "../assets/img/product/chemise 6/2.webp",
      "../assets/img/product/chemise 6/5.webp",
      "../assets/img/product/chemise 6/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//6
  {
    _id: '0007',
    name: "Chemise à imprimé floral (sans t-shirt)",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 7/1.webp",
      "../assets/img/product/chemise 7/2.webp",
      "../assets/img/product/chemise 7/3.webp",
      "../assets/img/product/chemise 7/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//7
  {
    _id: '0008',
    name: "Chemise à bouton",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 8/1.webp",
      "../assets/img/product/chemise 8/2.webp",
      "../assets/img/product/chemise 8/3.webp",
      "../assets/img/product/chemise 8/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//8
  {
    _id: '0009',
    name: "Chemise à bouton",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 9/1.webp",
      "../assets/img/product/chemise 9/2.webp",
      "../assets/img/product/chemise 9/3.webp",
      "../assets/img/product/chemise 9/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//9
  {
    _id: '0010',
    name: "Chemise aléatoire à rayures (sans t-shirt)",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 10/1.webp",
      "../assets/img/product/chemise 10/2.webp",
      "../assets/img/product/chemise 10/3.webp",
      "../assets/img/product/chemise 10/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//10
  {
    _id: '0011',
    name: "Chemise à imprimé géométrique",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 11/1.webp",
      "../assets/img/product/chemise 11/2.webp",
      "../assets/img/product/chemise 11/3.webp",
      "../assets/img/product/chemise 11/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  },//11
  {
    _id: '0012',
    name: "Chemise à blocs de couleurs asymétrique (sans t-shirt)",
    description: "Chemise décontractée pour l'été",
    category: ['Chemise', "Homme"],
    imageUrl: [
      "../assets/img/product/chemise 12/1.webp",
      "../assets/img/product/chemise 12/2.webp",
      "../assets/img/product/chemise 12/3.webp",
      "../assets/img/product/chemise 12/4.webp"
    ],
    sold_price: 20.99,
    regular_price:60.99,
    created_at: new Date()
  }//12
]
