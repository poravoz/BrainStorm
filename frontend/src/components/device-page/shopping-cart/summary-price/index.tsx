import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import "../../../../styles/variables.css";
import ArrowCode from './icons/arrow-code';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../contexts/theme';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectProductSC } from '../../../../slices/shoping-cart-slice';

interface ShippingOption {
  name: string;
  price: number;
  value: string;
}

const SummaryPrice = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  let cartProducts = useAppSelector(selectProductSC)
  const dispatch = useAppDispatch();

  const shippingOptions: ShippingOption[] = [
    { name: "Nova Poshta", price: 10.00, value: "option1" },
    { name: "UkrPoshta", price: 3.00, value: "option2" },
    { name: "Courier", price: 25.00, value: "option3" },
  ];

  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0].value);
  const itemCountText = cartProducts.length <= 1 ? `ITEM ${cartProducts.length}` : `ITEMS ${cartProducts.length}`;

  const total = cartProducts.reduce((acc, item) => {
    let itemPrice = 0;
    itemPrice = parseFloat(item.product.price.substr(1).replace(",", "."));
    return acc + itemPrice * item.count;
  }, 0);

  const selectedOption = shippingOptions.find(option => option.value === selectedShipping);
  const shippingPrice = selectedOption ? selectedOption.price : shippingOptions[0].price;
  const totalPrice = total + shippingPrice;

  const handleShippingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShipping(event.target.value);
  };

  return (
    <div className="summary-sc">
      <div className='header-summary-sc'>
        <h2 className="h2-shopping-cart">{t("store-page.summary")}</h2>
      </div>
      <div className='items-and-price-summary-sc'>
        <p className="count-price-items-summary-sc">{itemCountText}</p>
        <p className="count-price-items-summary-sc">{`$${total.toFixed(2)}`}</p>
      </div>
      <div className='shipping-summary-sc'>
        <label htmlFor="options" className="count-price-items-summary-sc">{t("store-page.shipping")}</label>
        <select className='options-shipping-sc' id="options" name="options" onChange={handleShippingChange}>
        {shippingOptions.map(option => (
            <option key={option.value} className='option-shipping-sc' value={option.value}>{`${option.name} - $${option.price.toFixed(2)}`}</option>
          ))}
        </select>
      </div>
      <div className='total-price-summary-sc'>
        <p className="count-price-items-summary-sc">{t("store-page.total_price")}</p>
        <p className="count-price-items-summary-sc">{`$${totalPrice.toFixed(2)}`}</p>
      </div>
      <div className='container-button-checkout'>
          <Link 
            to="/checkout"
            className='button-checkout'
            state={{cartProducts, selectedShippingOption: selectedOption, totalOrders: total, totalPrice: totalPrice}}
          >
              {t("store-page.checkout")}
          </Link>
      </div>
    </div>
  )
}

export default SummaryPrice;
