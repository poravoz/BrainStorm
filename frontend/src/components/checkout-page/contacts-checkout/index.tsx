import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';
import { useAppDispatch } from '../../../app/hooks';
import { setCustomerC } from '../../../slices/сustomer-slice';

// const ContactsCheckout: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const ContactsCheckout = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  

  // Define customerDetails as state using useState
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    const { name, value } = e.target;

    setCustomerDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));

    setCustomerDetails(prevDetails => {
      if (prevDetails['name'] !== '' && prevDetails['lastname'] !== '' && prevDetails['phone'] !== '' && prevDetails['email'] !== '') {
        dispatch(setCustomerC(prevDetails));
      }
      return prevDetails;
    });
  };


  return (
    <div className="contacts-checkout-container">
      <h2 className="h2-contacts-checkout">{t("checkout-page.contacts")}</h2>
      <form className="container-details">
        <label className='label-form-checkout' htmlFor="name">{t("checkout-page.name")}</label>
        <input
          className='input-form-checkout'
          type="text"
          name="name"
          placeholder='Enter Name'
          onChange={handleInputChange}
        />
        <label className='label-form-checkout' htmlFor="lastname">{t("checkout-page.lastname")}</label>
        <input
          className='input-form-checkout'
          type="text"
          name="lastname"
          placeholder='Enter Lastname'
          onChange={handleInputChange}
        />
        <label className='label-form-checkout' htmlFor="phone">{t("checkout-page.phone")}</label>
        <input
          className='input-form-checkout'
          type="text"
          name="phone"
          placeholder='Enter Phone'
          onChange={handleInputChange}
        />
        <label className='label-form-checkout' htmlFor="email">E-mail</label>
        <input
          className='input-form-checkout'
          type="text"
          name="email"
          placeholder='Enter E-mail'
          value={customerDetails.email} // Bind input value to state
          onChange={handleInputChange}
        />
      </form>
      <div className='bottom-line'></div>
    </div>
  );
}

export default ContactsCheckout;