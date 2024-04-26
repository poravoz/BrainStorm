import React, { useState, useContext, useEffect } from 'react';
import ItemsInCart from '../items-in-cart';
import SummaryPrice from '../summary-price';
import "./style.css";
import "../../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../contexts/theme';

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

const WrapperCart: React.FC<{ cartItems: ItemProp[]; addToCart: (product: ItemProp) => void; removeFromCart: (productId: number, productCategory: string) => void; updateCartItems: (product: ItemProp[]) => void }> = ({ removeFromCart, updateCartItems, cartItems, addToCart }) => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  return (
    <div className="wrapper-sc">
      <div className='wrapper-shopping-cart'>
        <div className='items-in-cart'>
          <ItemsInCart 
            products={cartItems}
            addToCart={addToCart}
            updateCartItems={updateCartItems}
            removeFromCart={removeFromCart}
          />
        </div>
        <div className="summary-price">
          <SummaryPrice 
            products={cartItems}
            
          />
        </div>
      </div>
    </div>
    
  )
}

export default WrapperCart;