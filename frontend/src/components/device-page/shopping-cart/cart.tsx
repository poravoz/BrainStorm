import React, { CSSProperties, useContext, useEffect } from 'react';
import { useLocation } from "react-router";
import NavigationBar from "../../main-page/navigation/navigation";
import WrapperCart from './wrapper-cart';
import Footer from "../../main-page/footer/footet";
import "../../../styles/variables.css";
import { ThemeContext } from '../../../contexts/theme';

const Cart = () => {
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
        <WrapperCart/>

        <Footer />
    </div>

  )
}

export default Cart;