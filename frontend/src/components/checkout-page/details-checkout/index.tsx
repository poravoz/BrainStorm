import React, { CSSProperties, useContext, useEffect } from 'react';
import ContactsCheckout from '../contacts-checkout';
import DeliveryCheckout from '../delivery-checkout';
import PaymentCheckout from '../payment-checkout';
import OrderSummary from '../order-summary-checkout';
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

// const WrapperCheckout: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const DetailsCheckout = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);


  return (
    <div className="details-checkout-container">
      <ContactsCheckout />
      <DeliveryCheckout />
      <PaymentCheckout />
      <OrderSummary />
    </div>
  )
}

export default DetailsCheckout;