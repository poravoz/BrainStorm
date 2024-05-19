import React, { useState } from 'react';
import MainPage from './components/main-page/main-page';
import Store from './components/store-page/store';
import ContentCategory from './components/store-page/content-category';
import Device from './components/device-page/device';
import Cart from './components/device-page/shopping-cart/cart';
import Checkout from './components/checkout-page/checkout';
import {Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import SignUpPage from './components/sign-up&sign-in/sign-up-page/sign-up-page';
import SignInPage from './components/sign-up&sign-in/sign-in-page/sign-in-page';
import "./style.css";

interface ItemProp {
  id: number;
  category: string;
  title: string;
  old_price: string;
  discount: string;
  price: string;
  popularity: number;
  images: string[];
  count: number;
}

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/category" element={<ContentCategory />} />
        <Route path="/device" element={<Device />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
     </Provider>
  );
}

export default App;