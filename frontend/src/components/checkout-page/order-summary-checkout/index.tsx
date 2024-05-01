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

// const OrderSummary: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const OrderSummary = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  let location = useLocation();


  return (
    <div className="order-summary-checkout-container">
      <h2 className="h2-contacts-checkout">{t("checkout-page.order_summary")}</h2>
      <div className="order-summary-container-details">
        <div className="orders-shipping-container">
          <div className="orders-shipping-summary">
            <p className=''>{t("checkout-page.orders")}</p>
            <p className="">{`$${parseFloat(location.state.totalOrders).toFixed(2)}`}</p>
          </div>
          <div className="orders-shipping-summary">
            <p className=''>{t("checkout-page.shipping")}</p>
            <p className="">{`$${parseFloat(location.state.selectedShippingOption.price).toFixed(2)}`}</p>
          </div>
        </div>
        <div className="orders-shipping-summary">
          <p className="p-orders-shipping-summary-total">{t("checkout-page.total")}</p>
          <p className="p-orders-shipping-summary-total">{`$${(parseFloat(location.state.totalOrders) + parseFloat(location.state.selectedShippingOption.price)).toFixed(2)}`}</p>
        </div>
      </div>
      <div className='last-bottom-line'></div>
    </div>
  )
}

export default OrderSummary;