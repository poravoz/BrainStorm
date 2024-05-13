import React, { CSSProperties, useContext, useEffect } from 'react';
import { useLocation } from "react-router";
import NovaPoshta from './icons/nova-poshta';
import Courier from './icons/courier';
import UkrPoshta from './icons/ukr-poshta';
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

// const DeliveryCheckout: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const DeliveryCheckout = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  let location = useLocation();
  const { name } = location.state.selectedShippingOption || {};

  const renderIcon = () => {
    switch (name) {
      case "Nova Poshta":
        return <NovaPoshta width='10vmin' height='5vmin' className='logo-delivery'/>;
      case "UkrPoshta":
        return <UkrPoshta width='10vmin' height='5vmin' className='logo-delivery'/>;
      case "Courier":
        return <Courier width='10vmin' height='5vmin' className='logo-delivery'/>;
      default:
        // location.state.selectedShippingOption.name = "Nova Poshta";
        return <NovaPoshta width='10vmin' height='5vmin' className='logo-delivery'/>;
    }
  };


  return (
    <div className="delivery-checkout-container">
      <h2 className="h2-contacts-checkout">{t("checkout-page.delivery")}</h2>
      <div className="delivery-container-details">
        <div className='logo-name-delivery'>
          {renderIcon()}
          <p className='name-delivery-checkout'>{`${location.state.selectedShippingOption.name}`}</p>
        </div>
        <p className='name-delivery-checkout'>{`$${parseFloat(location.state.selectedShippingOption.price).toFixed(2)}`}</p>
      </div>
      <div className='bottom-line'></div>
    </div>
  )
}

export default DeliveryCheckout;