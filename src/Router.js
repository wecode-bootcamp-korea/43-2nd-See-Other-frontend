import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import Ticket from './pages/Ticket/Ticket';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
