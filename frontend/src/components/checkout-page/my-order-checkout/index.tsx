import React, { CSSProperties, useContext, useEffect } from 'react';
import { useLocation } from "react-router";
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

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

// const MyOrderCheckout: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const MyOrderCheckout = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  let location = useLocation();
  const state = location.state as { products: ItemProp[] };


  return (
    <div className="contacts-checkout-container">
      <h2 className="h2-contacts-checkout">{t("checkout-page.my_order")}</h2>
      <div className="my-order-container">
        {state.products.map((product, index) => (
          <div key={index} className={`order-container ${index === state.products.length - 1 ? '' : 'order-bottom-line'}`}>
            <div className="img-details-order-container">
              <img src={product.images[0]} className="image-order" alt={product.title} />
              <div className="details-order-product-container">
                <div className="title-category-container">
                  <p className="p-my-order-category">{product.category}</p>
                  <p className="p-my-order-title">{product.title}</p>
                </div>
                <p className="p-my-order-quantity">{`${t("checkout-page.quantity")}: ${product.count}`}</p>
              </div>
            </div>
            <p className="p-my-order-price">{`$${(parseFloat(product.price.replace('$', '')) * product.count).toFixed(2)}`}</p>
          </div>
        ))}
      </div>
      <div className='last-order-bottom-line'></div>
    </div>
  )
}

export default MyOrderCheckout;