import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
 
export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<ChatPage />} />
          <Route path='/auth/*' element={<AuthRouter />} />
          <Route path = '*' element = { <Navigate replace to = '/' />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};