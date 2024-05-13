import React, { CSSProperties, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import MyOrderCheckout from '../my-order-checkout';
import "./style.css";
import "../../../styles/variables.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addOrderOL, selectOrdersOL } from '../../../slices/orderlist-slice';
import { clearCartSC, selectProductSC } from '../../../slices/shoping-cart-slice';
import { clearCustomerC, selectCustomerC } from '../../../slices/сustomer-slice';

// const PlaceOrder: React.FC<{ products: ItemProp[]; updateCartItems: (product: ItemProp[]) => void; removeFromCart: (productId: number, productCategory: string) => void }> = ({ removeFromCart, products, updateCartItems }) => {
const PlaceOrder = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);

  let navigate = useNavigate();
  let location = useLocation();
  let customer = useAppSelector(selectCustomerC)
  let orders = useAppSelector(selectOrdersOL)
  let products = useAppSelector(selectProductSC)
  const dispatch = useAppDispatch();
  const payPrice = location.state.totalPrice.toFixed(2);


  const handlePlaceOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const delivery = location.state.selectedShippingOption.name || {};
    if (!customer.name || !customer.lastname || !customer.phone || !customer.email) {
      e.preventDefault();
    }
    else {
      let id = 0;
      if (orders.length > 0) {
        id = orders[orders.length - 1].id + 1;
      }

      dispatch(addOrderOL({
        id: id,
        customer: customer,
        products: { products: products, totalPrice: location.state.totalPrice },
        delivery: delivery,
        payPrice: parseFloat(payPrice),
        date: new Date(Date.now()).toLocaleDateString()
      }));

      dispatch(clearCustomerC());
      dispatch(clearCartSC());
      navigate('/store');
    }
  }

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