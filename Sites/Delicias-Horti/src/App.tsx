import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import NovaReceita from './pages/NovaReceita';
import Carrinho from './pages/Carrinho';
import Login from './pages/Login';       // certifique-se que esses arquivos existem
import Cadastro from './pages/Cadastro'; // certifique-se que esses arquivos existem

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/receitas/:id" element={<RecipeDetail />} />
        <Route path="/receitas/nova" element={<NovaReceita />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

