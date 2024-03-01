import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import User from './pages/user';
import Header from './components/header';
import Catelog from './pages/catelog';
import Cart from './pages/cart';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/cart/" element={<Cart />} />
        <Route path="/catelog/" element={<Catelog />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/*" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
