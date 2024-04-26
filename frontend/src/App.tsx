import React, { useState } from 'react';
import MainPage from './components/main-page/main-page';
import Store from './components/store-page/store';
import Device from './components/device-page/device';
import Cart from './components/device-page/shopping-cart/cart';
import {Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import SignUpPage from './components/sign-up&sign-in/sign-up-page/sign-up-page';
import SignInPage from './components/sign-up&sign-in/sign-in-page/sign-in-page';

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
  const [cartItems, setCartItems] = useState<ItemProp[]>([]);

  const addToCart = (product: ItemProp) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number, productCategory: string) => {
    const updatedCartItems = cartItems.filter(item => (item.id !== productId || item.category !== productCategory));
    setCartItems(updatedCartItems);
  };

  const updateCartItems = (updatedItems: ItemProp[]) => {
    setCartItems(updatedItems);
  };

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/device" element={<Device addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path="/cart" element={<Cart addToCart={addToCart} cartItems={cartItems} updateCartItems={updateCartItems} removeFromCart={removeFromCart}/>} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
     </Provider>
  );
}

export default App;