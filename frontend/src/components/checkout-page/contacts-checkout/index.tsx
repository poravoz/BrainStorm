import React, { CSSProperties, useContext, useEffect } from 'react';
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

// const ContactsCheckout: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const ContactsCheckout = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);


  return (
    <div className="contacts-checkout-container">
      <h2 className="h2-contacts-checkout">{t("checkout-page.contacts")}</h2>
      <form className="container-details">
        <label className='label-form-checkout' htmlFor="name">{t("checkout-page.name")}</label>
        <input className='input-form-checkout' type="text" placeholder='Enter Name'/>
        <label className='label-form-checkout' htmlFor="lastname">{t("checkout-page.lastname")}</label>
        <input className='input-form-checkout' type="text" placeholder='Enter Lastname'/>
        <label className='label-form-checkout' htmlFor="phone">{t("checkout-page.phone")}</label>
        <input className='input-form-checkout' type="text" placeholder='Enter Phone'/>
        <label className='label-form-checkout' htmlFor="phone">E-mail</label>
        <input className='input-form-checkout' type="text" placeholder='Enter E-mail'/>
      </form>
      <div className='bottom-line'></div>
    </div>
  )
}

export default ContactsCheckout;