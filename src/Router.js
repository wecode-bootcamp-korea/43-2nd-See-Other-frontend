import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import Movies from './pages/Movies/Movies';
import Ticket from './pages/Ticket/Ticket';
import Detail from './components/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
