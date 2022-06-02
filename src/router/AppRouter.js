import React from 'react';
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ChatPage } from '../pages/ChatPage';
 
export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes path='/' element={<ChatPage />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<ChatPage />} />
          {/*     
          <Navigate to='/' />   
          */}
        </Routes>
      </BrowserRouter>
    </>
  );
};