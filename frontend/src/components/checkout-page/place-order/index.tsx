import React, { useContext, useState } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import MyOrderCheckout from '../my-order-checkout';
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';
import axios from 'axios';

const PlaceOrder = () => {
    const [t] = useTranslation("global");
    const [{ theme }] = useContext(ThemeContext);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const location = useLocation();

    const handlePlaceOrder = async () => {
        const productTitles = JSON.parse(localStorage.getItem('productTitles') || '[]');
        const deliveryMethod = localStorage.getItem('deliveryMethod') || '';
        const phoneNumber = localStorage.getItem('phoneNumber') || '';
    
        const orderData = {
          product_name: productTitles,
          phone: phoneNumber,
          delivery: deliveryMethod
        };
    
        try {
          const response = await axios.post('http://localhost:5000/products/', orderData, { withCredentials: true });
          console.log('Order placed successfully:', response.data);
          localStorage.removeItem('productTitles'); 
          localStorage.removeItem('deliveryMethod');
          localStorage.removeItem('phoneNumber');
          setIsOrderPlaced(true);
        } catch (error) {
          console.error('Error placing order:', error);
        }
    };

    return (
        <div className="place-order-container">
          <MyOrderCheckout />
          <div className="last-total-summary-container">
            <h2 className="h2-total-place-order">Total</h2>
            <p className="h2-total-place-order">{`$${(location.state?.totalPrice || 0).toFixed(2)}`}</p>
          </div>
          <div className='last-total-bottom-line'></div>
          <div className='container-button-my-order'>
            <Link to={"/store"}
              className='button-my-order'
              onClick={handlePlaceOrder}
            >
              Place Order
            </Link>
          </div>
        </div>
    );
};

export default PlaceOrder;
