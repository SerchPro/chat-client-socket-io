import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

import '../css/login-register.css'

export const AuthRouter = () => {
  return (
    <>
        <Routes >
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path = '*' element = { <Navigate replace to = '/auth/login' />} />
        </Routes>
    </>
  )
}
