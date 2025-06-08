import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

const NovaReceita: React.FC = () => {
  const { addRecipe } = useRecipes();
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(), // simples id
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      instructions,
      image: image || 'https://via.placeholder.com/300?text=Nova+Receita'
    };

    addRecipe(newRecipe);
    navigate('/receitas');
  };

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Nova Receita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Título da receita"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Ingredientes (separados por vírgula)"
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Modo de preparo"
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="URL da imagem (opcional)"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar Receita</button>
      </form>
    </main>
  );
};

export default NovaReceita;
