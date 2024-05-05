import React, { useContext, useEffect } from 'react';
import { useLocation } from "react-router";
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';
import { useAppSelector } from '../../../app/hooks';
import { selectProductSC } from '../../../slices/shoping-cart-slice';

const MyOrderCheckout = () => {
  const { t } = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);
  const location = useLocation();

  let cartProducts = useAppSelector(selectProductSC);

  const saveProductTitleToLocal = (title: string) => {
    console.log('Saving product title to localStorage:', title);
    localStorage.setItem('productTitle', title); 
  };

  useEffect(() => {
    if (cartProducts.length > 0) {
      const firstProductTitle = cartProducts[0].product.title;
      saveProductTitleToLocal(firstProductTitle);
    }
  }, [cartProducts]); 

  return (
    <div className="my-order-container">
      {cartProducts.map((item, index) => (
        <div key={index} className={`order-container ${index === cartProducts.length - 1 ? '' : 'order-bottom-line'}`}>
          <div className="img-details-order-container">
            <img src={item.product.images[0]} className="image-order" alt={item.product.title} />
            <div className="details-order-product-container">
              <div className="title-category-container">
                <p className="p-my-order-category">{item.product.category}</p>
                <p className="p-my-order-title">
                  <span onClick={() => saveProductTitleToLocal(item.product.title)}>{item.product.title}</span>
                </p>
              </div>
              <p className="p-my-order-quantity">{`${t("checkout-page.quantity")}: ${item.count}`}</p>
            </div>
          </div>
          <p className="p-my-order-price">{`$${(parseFloat(item.product.price.replace('$', '')) * item.count).toFixed(2)}`}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrderCheckout;
