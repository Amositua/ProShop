import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/cartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';
import PrivateRoute from './components/PrivateRoute';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/orderPage';
import ProfilePage from './pages/ProfilePage'

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import AdminRoute from './components/AdminRoute';
import OrderListPage from './pages/admin/orderListPage';
import ProductListPage from './pages/admin/productListPage';
import ProductEditPage from './pages/admin/productEditPage';
import UserListPage from './pages/admin/userListPage';
import UserEditPage from './pages/admin/userEditPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/search/:keyword' element={<HomePage />} />
      <Route path='/page/:pageNumber' element={<HomePage />} />
      <Route path='/search/:keyword/page/:pageNumber' element={<HomePage />}/>
      <Route path='/cart' element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
        
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='/payment' element={<PaymentPage />} />  
        <Route path='/placeorder' element={<PlaceOrderPage />} />
        <Route path='/order/:id' element={<OrderPage />} />
        <Route path='/profile' element={<ProfilePage />} />      
      </Route>

      <Route  path='' element={<AdminRoute />}>
      <Route path='/admin/orderlist' element={<OrderListPage />} />
      <Route path='/admin/productlist' element={<ProductListPage />} />
      <Route path='/admin/productlist/:pageNumber' element={<ProductListPage />}/>
      <Route path='/admin/product/:id/edit' element={<ProductEditPage />} />
      <Route path='/admin/userlist' element={<UserListPage />} />
      <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
      <RouterProvider router={router} />
      </PayPalScriptProvider>
      
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();