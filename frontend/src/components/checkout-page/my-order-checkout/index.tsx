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

  const saveProductTitlesToLocal = (titles: string[]) => {
    console.log('Saving product titles to localStorage:', titles);
    const titlesString = JSON.stringify(titles.join(', '));
    localStorage.setItem('productTitles', titlesString);
  };

  useEffect(() => {
    if (cartProducts.length > 0) {
      const titles = cartProducts.map(item => item.product.title);
      saveProductTitlesToLocal(titles);
    }
  }, [cartProducts]);

  const handleTitleClick = (title: string) => {
    console.log('Clicked title:', title);
  };

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
                  {/* Pass item.product.title to handleTitleClick */}
                  <span onClick={() => handleTitleClick(item.product.title)}>{item.product.title}</span>
                </p>
              </div>
              <p className="p-my-order-quantity">{`${t('checkout-page.quantity')}: ${item.count}`}</p>
            </div>
          </div>
          <p className="p-my-order-price">{`$${(parseFloat(item.product.price.replace('$', '')) * item.count).toFixed(2)}`}</p>
        </div>
      ))}
    </div>
  );
};


export default MyOrderCheckout;
