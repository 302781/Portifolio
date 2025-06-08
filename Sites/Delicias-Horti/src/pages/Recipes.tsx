import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { useRecipes } from '../context/RecipeContext';

const Recipes: React.FC = () => {
  const { recipes } = useRecipes();
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Receitas Deliciosas</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {recipes.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', borderRadius: '8px', width: '250px', padding: '1rem' }}>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100%' }} />
            <h3>{recipe.title}</h3>
            <Link to={`/receitas/${recipe.id}`}>Ver Receita</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Recipes;
