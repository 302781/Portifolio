import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Recipe, recipes as initialRecipes } from '../data/recipes';

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const stored = localStorage.getItem('recipes');
    return stored ? JSON.parse(stored) : initialRecipes;
  });

  const addRecipe = (recipe: Recipe) => {
    const updated = [...recipes, recipe];
    setRecipes(updated);
    localStorage.setItem('recipes', JSON.stringify(updated));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error('useRecipes must be used within a RecipeProvider');
  return context;
};
