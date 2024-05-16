import React, { useState, useContext, useEffect } from 'react';
import ItemsInCart from '../items-in-cart';
import SummaryPrice from '../summary-price';
import "./style.css";
import "../../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../contexts/theme';

const WrapperCart = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);
  
  return (
    <div className="wrapper-sc">
      <div className='wrapper-shopping-cart'>
        <div className='items-in-cart'>
          <ItemsInCart/>
        </div>
        <div className="summary-price">
          <SummaryPrice/>
        </div>
      </div>
    </div>
    
  )
}

export default WrapperCart;