import React from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Skills } from './components/Skills';

export const App = () => {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
};
