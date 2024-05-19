import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import ShoppingCartSvg from './icons/shopping-cart-svg';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';
import { useAppDispatch } from '../../../app/hooks';
import { searchProductS } from '../../../slices/search-slice';

const OptionsTechDevices = () => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // State to store the search term
  const [searchTerm, setSearchTerm] = useState('');
  // Ref to store the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Update search term from query parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const term = params.get('searchTerm') || '';
    setSearchTerm(term);

    // Set focus to the input element if it exists
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    dispatch(searchProductS(searchTerm));
    navigate(`/category?searchTerm=${searchTerm}`, {
      state: { category: "search", searchTerm }
    });
  };

  return (
    <div className="primary-content-container">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito" />
      <div className="buttons-options">
        <div className="flex-row-with-gap">
          <div className="sb-example-3">
            <input
              ref={inputRef}
              className="search__input"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <div className="rounded-container-with-icons-and-text">
            <Link to="/store" className="options-description-text-style">{t("store-page.all_devices")}</Link>
          </div>
          <div className="rounded-container-with-icons-and-text">
            <Link to="/category" state={{ category: "monitors" }} className="options-description-text-style">
              {t("store-page.monitors")}
            </Link>
          </div>
          <div className="rounded-container-with-icons-and-text">
            <Link to="/category" state={{ category: "keyboards" }} className="options-description-text-style">
              {t("store-page.keyboards")}
            </Link>
          </div>
          <div className="rounded-container-with-icons-and-text">
            <Link to="/category" state={{ category: "mice" }} className="options-description-text-style">
              {t("store-page.mice")}
            </Link>
          </div>
          <div className="rounded-container-with-icons-and-text">
            <Link to="/category" state={{ category: "mouse_pads" }} className="options-description-text-style">
              {t("store-page.mouse_pads")}
            </Link>
          </div>
        </div>
        <Link to='/cart' className="cart-btn offset">
          <ShoppingCartSvg width="4vmin" height='4vmin' color="white" className=''/>
        </Link>
      </div>
    </div>
  );
}

export default OptionsTechDevices;
