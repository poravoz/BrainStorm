import React, { CSSProperties, useContext, useEffect } from 'react';
import ItemShoppingCart from './item-shopping-cart';
import "./style.css";
import "../../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../contexts/theme';
import { useAppSelector } from '../../../../app/hooks';
import { selectProductSC } from '../../../../slices/shoping-cart-slice';

const ItemsInCart = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  let cartProducts = useAppSelector(selectProductSC)
  const itemCountText = cartProducts.length <= 1 ? `${cartProducts.length} item` : `${cartProducts.length} items`;

  return (
    <div className="items-sc">
      <div className='header-shopping-cart'>
        <h2 className="h2-shopping-cart">{t("store-page.shopping-cart")}</h2>
        <p className="count-items-sc">{itemCountText}</p>
      </div>
      <ItemShoppingCart/>
    </div>
    
  )
}

export default ItemsInCart;