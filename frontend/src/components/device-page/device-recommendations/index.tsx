import React, {useState, useContext, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../contexts/theme';

interface ItemProp {
  id: number;
  category: string;
}

const DeviceRecommendations: React.FC<ItemProp> = ({ id, category }) => {
  const [t] = useTranslation("global");
  const [{ theme }] = useContext(ThemeContext);
  const location = useLocation();

  const [categoryData, setCategoryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const path = "../../../data/" + category.toLowerCase().replace(/\s/g, '_');
        const { default: categoryData } = await import(`../../../data/${category.toLowerCase().replace(/\s/g, '_')}`);
        setCategoryData(categoryData);
      } catch (error) {
        console.error("Failed to load the category data:", error);
      }
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
      setHoveredId(id);
  };

  const handleMouseLeave = () => {
      setHoveredId(null);
  };

  
  return (
    <div>
      <p className="device-name-recommendations">{t("device-page.recommendations")}</p>
      <ul className="saleslist-recommendations">
        {categoryData.reduce((acc, item) => {
          if (acc.length < 3 && item._id !== id) {
            acc.push(item);
          }
          return acc;
        }, []).map((item: any) => ( 
          item._id !== id &&
            <li
                key={item._id} 
                className="card-recommendations"
                onMouseEnter={() => handleMouseEnter(item._id)}
                onMouseLeave={handleMouseLeave}
            >
              <Link to="/device" 
                className="cardHeader-recommendations" 
                state={item}
              >
                  <img src={item.images[0]} className='image-devices-recommendations' alt="sales game" />
                  <p className="text-category-recommendations">{item.category}</p>
                  <p className="text-title-recommendations">{item.title}</p>
                  {hoveredId === item._id && <div className="icon-add-to-wishlist-for-item-recommendations">+</div>}
              </Link>
              <div className="cardFooter-recommendations">
                  <span className="discount-recommendations">-{item.discount}</span>
                  <div className="priceContainer-recommendations">
                      <span className="oldprice-recommendations">{item.old_price}</span>
                      <span className="pricetag-recommendations">{item.price}</span>
                  </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DeviceRecommendations;
