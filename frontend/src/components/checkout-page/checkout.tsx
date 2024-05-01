import React, { CSSProperties, useContext, useEffect } from 'react';
import { useLocation } from "react-router";
import NavigationBar from "../main-page/navigation/navigation";
import WrapperCheckout from './wrapper-checkout';
import Footer from "../main-page/footer/footet";
// import "../../../styles/variables.css";
import { ThemeContext } from '../../contexts/theme';

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

// const Cart: React.FC<{ cartItems: ItemProp[]; addToCart: (product: ItemProp) => void; removeFromCart: (productId: number, productCategory: string) => void; updateCartItems: (product: ItemProp[]) => void }> = ({ removeFromCart, updateCartItems, cartItems, addToCart }) => {
const Checkout: React.FC<{ products: ItemProp[] }> = ({ products }) => {
  let location = useLocation();
  const containerStyle: CSSProperties = {
        margin: '0 10vw'
  };

  const [{ theme }] = useContext(ThemeContext);

  useEffect(() => {
        window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{backgroundColor : theme.backgroundColor_store, position: `relative`, height: `100vh`}}>
        <NavigationBar />
        <WrapperCheckout />
        {/* <WrapperCart cartItems={cartItems} addToCart={addToCart} updateCartItems={updateCartItems} removeFromCart={removeFromCart}/> */}


        <Footer />
    </div>
  )
}

export default Checkout;