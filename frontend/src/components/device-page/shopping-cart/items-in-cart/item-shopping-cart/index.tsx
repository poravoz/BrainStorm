import React, { CSSProperties, useContext, useEffect } from 'react';
import Delete from './icons/delete';
import "./style.css";
import "../../../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../../contexts/theme';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { decProductSC, incProductSC, remProductSC, selectProductSC } from '../../../../../slices/shoping-cart-slice';
import { Product } from '../../../../../types';

const ItemShoppingCart = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);
  
  let cartProducts = useAppSelector(selectProductSC)
  const dispatch = useAppDispatch();

  const decreaseCount = (product: Product) => {
    dispatch(decProductSC(product));
  };

  const increaseCount = (product: Product) => {
    dispatch(incProductSC(product));
  };

  const removeFromCart = (product: Product) => {
    dispatch(remProductSC(product));
  };

  return (
    <>
      {cartProducts.map((item, index) => (
        <div className="item-shopping-cart">
          <img src={item.product.images[0]} className='image-item-sc' alt={item.product.id.toString()} />
          <div key={index} className='details-item-sc'>
            <p className='category-item-sc'>{item.product.category}</p>
            <p className='title-item-sc'>{item.product.title}</p>
          </div>
          <div className='container-count-item-sc'>
            <button className='change-count-item-sc' onClick={() => decreaseCount(item.product)} disabled={item.count <= 1}>-</button>
            <p className="count-item-sc">{item.count}</p>
            <button className='change-count-item-sc' onClick={() => increaseCount(item.product)}>+</button>
          </div>
          <p className='price-item-sc'>{item.product.price}</p>
          <Delete width='4vmin' height='4vmin' className='delete-item-from-cart-cs' onClick={() => removeFromCart(item.product)}/>
        </div>
      ))}
      
    </>
  )
}

export default ItemShoppingCart;