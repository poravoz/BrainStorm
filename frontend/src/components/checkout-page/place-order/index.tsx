import React, { useContext, useState } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import MyOrderCheckout from '../my-order-checkout';
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';
import axios from 'axios';

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

const PlaceOrder = () => {
    const [t] = useTranslation("global");
    const [{ theme }] = useContext(ThemeContext);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const location = useLocation();

    const handlePlaceOrder = async () => {
        const cartProducts: ItemProp[] = JSON.parse(localStorage.getItem('cartProducts') || '[]');
        const selectedShippingOption: { name: string; phone: string } = JSON.parse(localStorage.getItem('selectedShippingOption') || '{}');

        const productNames = cartProducts.map((item: ItemProp) => item.title).join(', ');
        const delivery = selectedShippingOption.name;
        const phone = selectedShippingOption.phone;

        const orderData = {
            product_name: productNames,
            phone: phone,
            delivery: delivery
        };

        try {
            const response = await axios.post('http://localhost:5000/products/', orderData);
            console.log('Order placed successfully:', response.data);
            setIsOrderPlaced(true);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <div className="place-order-container">
            <MyOrderCheckout />
            <div className="last-total-summary-container">
                <h2 className="h2-total-place-order">{t("checkout-page.total")}</h2>
                <p className="h2-total-place-order">{`$${(location.state.totalPrice.toFixed(2))}`}</p>
            </div>
            <div className='last-total-bottom-line'></div>
            <div className='container-button-my-order'>
                <button 
                    className='button-my-order'
                    onClick={handlePlaceOrder}
                >
                    {t("checkout-page.place_order")}
                </button>
            </div>
            <div className="terms-and-conditions-container">
                <p>Target’s terms and conditions page discusses its acceptable use policy across its website as well as mobile sites, services, applications, platforms, and tools that the U.S. retailer operates. 
                That’s a massive amount of businesses and operating units to cover, but it does its job very well.<br></br><br></br>
                The page is super detailed, but we like the jump links at the top for users to be able to navigate to a specific section. Other than that, it does the job as intended — 
                protecting Target from a legal perspective, while informing users of what they can or cannot do on the platform.</p>
            </div>
        </div>
    )
}

export default PlaceOrder;
