import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import Movies from './pages/Movies/Movies';
import Ticket from './pages/Ticket/Ticket';
import Store from './pages/Store/Store';
import Detail from './components/Detail/Detail';
import Kakao from './pages/Account/component/Kakao';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/store" element={<Store />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/oauth/callback/kakao" element={<Kakao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
