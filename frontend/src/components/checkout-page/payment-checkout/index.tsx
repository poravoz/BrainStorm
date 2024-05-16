import React, { useState, useContext, useEffect } from 'react';
import Visa from './icons/visa';
import MasterCard from './icons/master-card';
import PayPal from './icons/paypal';
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

// const ContactsCheckout: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const PaymentCheckout = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleRadioChange = (event: any) => {
    setSelectedMethod(event.target.value);
  };



  return (
    <div className="payment-checkout-container">
      <h2 className="h2-contacts-checkout">{t("checkout-page.payment_method")}</h2>
      <div className="container-details">
        <div className='title-card'>
          <div className='radio-name-card'>
            <input type="radio" name="payment-method" className='custom-radio' id="visa" value="visa" checked={selectedMethod === "visa"} onChange={handleRadioChange}/>
            <label htmlFor="visa" className='label-radio-card'>VISA</label>
          </div>
          <Visa width='5vmin' height='5vmin' className='' />
        </div>
        {selectedMethod === "visa" && (
        <>
          <label htmlFor="card-number" className='label-card-number'>{t("checkout-page.card_number")}</label>
          <input type="text" className='input-card-number' placeholder='Card Number'/>
          <div className="labels-date-cvc">
            <label htmlFor="expiration-date" className='label-expiration-date'>{t("checkout-page.expiration_date")}</label>
            <label htmlFor="cvc" className='label-cvc'>{t("checkout-page.cvc")}</label>
          </div>
          <div className="details-more-card">
            <input type="number" className='input-expiration-date' placeholder='Month'/>
            <input type="number" className='input-expiration-date' placeholder='Year'/>
            <input type="number" className='input-expiration-date input-cvc' placeholder='CVC'/>
          </div>
        </>
        )}
      </div>
      <div className="container-details">
        <div className='title-card'>
          <div className='radio-name-card'>
            <input type="radio" name="payment-method" className='custom-radio' id="master-card" value="master-card" checked={selectedMethod === "master-card"} onChange={handleRadioChange}/>
            <label htmlFor="master-card" className='label-radio-card'>Master Card</label>
          </div>
          <MasterCard width='5vmin' height='5vmin' className='' />
        </div>
        {selectedMethod === "master-card" && (
        <>
          <label htmlFor="card-number" className='label-card-number'>{t("checkout-page.card_number")}</label>
          <input type="text" className='input-card-number' placeholder='Card Number'/>
          <div className="labels-date-cvc">
            <label htmlFor="expiration-date" className='label-expiration-date'>{t("checkout-page.expiration_date")}</label>
            <label htmlFor="cvc" className='label-cvc'>{t("checkout-page.cvc")}</label>
          </div>
          <div className="details-more-card">
            <input type="number" className='input-expiration-date' placeholder='Month'/>
            <input type="number" className='input-expiration-date' placeholder='Year'/>
            <input type="number" className='input-expiration-date input-cvc' placeholder='CVC'/>
          </div>
        </>
        )}
      </div>
      <div className="container-details">
        <div className='title-card'>
          <div className='radio-name-card'>
            <input type="radio" name="payment-method" className='custom-radio' id="paypal" value="paypal" checked={selectedMethod === "paypal"} onChange={handleRadioChange}/>
            <label htmlFor="paypal" className='label-radio-card'>PayPal</label>
          </div>
          <PayPal width='5vmin' height='5vmin' className='' />
        </div>
        {selectedMethod === "paypal" && (
        <>
          <label htmlFor="card-number" className='label-card-number'>{t("checkout-page.card_number")}</label>
          <input type="text" className='input-card-number' placeholder='Card Number'/>
          <div className="labels-date-cvc">
            <label htmlFor="expiration-date" className='label-expiration-date'>{t("checkout-page.expiration_date")}</label>
            <label htmlFor="cvc" className='label-cvc'>{t("checkout-page.cvc")}</label>
          </div>
          <div className="details-more-card">
            <input type="number" className='input-expiration-date' placeholder='Month'/>
            <input type="number" className='input-expiration-date' placeholder='Year'/>
            <input type="number" className='input-expiration-date input-cvc' placeholder='CVC'/>
          </div>
        </>
        )}
      </div>
      <div className='bottom-line'></div>
    </div>
  )
}

export default PaymentCheckout;