import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import UsersPage from '../pages/UsersPage/UsersPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path='users' element={<UsersPage />}/>
            <Route path='products' element={<ProductsPage />}/>
        </Route>
    </Routes>
  )
}
