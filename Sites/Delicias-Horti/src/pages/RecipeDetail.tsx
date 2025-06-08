import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { useRecipes } from '../context/RecipeContext';
import { useCart } from '../context/CartContext';


const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === Number(id));
  const { addToCart } = useCart();
  const handleAddIngredients = () => {
    recipe.ingredients.forEach(ingredient => addToCart(ingredient));
  };

  if (!recipe) return <p>Receita não encontrada.</p>;

  return (
    <main style={{ padding: '1rem' }}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ width: '300px' }} />
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h3>Modo de preparo:</h3>
      <p>{recipe.instructions}</p>
      <br />
      <Link to="/receitas">← Voltar às receitas</Link>
      <button onClick={handleAddIngredients}>
        Adicionar ingredientes ao carrinho
      </button>
    </main>
  );
};

export default RecipeDetail;
