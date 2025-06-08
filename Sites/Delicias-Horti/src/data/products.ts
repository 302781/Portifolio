export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Tomate',
      price: 4.5,
      image: 'https://via.placeholder.com/150?text=Tomate',
    },
    {
      id: 2,
      name: 'Alface',
      price: 2.8,
      image: 'https://via.placeholder.com/150?text=Alface',
    },
    {
      id: 3,
      name: 'Banana',
      price: 5.2,
      image: 'https://via.placeholder.com/150?text=Banana',
    },
  ];
  