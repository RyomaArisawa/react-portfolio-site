import React from 'react';
import './styles/App.css';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { History } from './components/History';
import { Products } from './components/Products';

export const App = () => {
  return (
    <>
      <Header />
      <Skills />
      <History />
      <Products />
      <Contact />
    </>
  );
};
