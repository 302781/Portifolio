export interface Recipe {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    image: string;
  }
  
  export const recipes: Recipe[] = [
    {
      id: 1,
      title: "Salada de Alface com Tomate",
      ingredients: ["Alface", "Tomate", "Azeite", "Sal"],
      instructions: "Lave e corte os ingredientes. Misture tudo em uma tigela e tempere a gosto.",
      image: "https://via.placeholder.com/300?text=Salada",
    },
    {
      id: 2,
      title: "Banana Frita",
      ingredients: ["Banana", "Açúcar", "Canela"],
      instructions: "Corte as bananas, frite em óleo quente e polvilhe com açúcar e canela.",
      image: "https://via.placeholder.com/300?text=Banana+Frita",
    }
  ];
  