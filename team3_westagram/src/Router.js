import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login-code" element={<LoginCode />} />
          <Route path="/main-code" element={<MainCode />} />
          <Route path="/login-gaebal" element={<LoginGaebal />} />
          <Route path="/main-gaebal" element={<MainGaebal />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;