import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import Arrow from './icons/arrow';


interface ItemProp {
    _id: number;
    category: string;
    title: string;
    old_price: string;
    discount: string;
    price: string;
    images: string[];
}

interface Props {
    items: ItemProp[];
}

const ContentItems: React.FC<Props> = ({ items }) => {
    const [t] = useTranslation("global");
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [startIndex, setStartIndex] = useState(0);

    const handleMouseEnter = (id: number) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNextClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    return (
        <div>
            <section className="sales">
                <div className="arrow-left" onClick={handlePrevClick}>
                    <Arrow width="4vmin" height='4vmin' className="arrow-span left"/>
                </div>
                <ul className="saleslist">
                    {items.slice(0, 4).map((item, index) => {
                        const itemIndex = (startIndex + index) % items.length;
                        const currentItem = items[itemIndex];
                        return (
                            <li 
                                key={item._id} 
                                className="card"
                                onMouseEnter={() => handleMouseEnter(currentItem._id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* <a href={'https://www.epicgames.com/store/en-US' + game.url}> */}
                                    <div className="cardHeader">
                                        {hoveredId === currentItem._id && <div className="icon-add-to-washlist-for-item">+</div>}
                                        {/* <div className="icon-add-to-washlist">+</div> */}
                                        <img src={currentItem.images[0]} className='image-devices' alt="sales game" />
                                        <p className="text-category">{currentItem.category}</p>
                                        <p className="text-title">{currentItem.title}</p>
                                    </div>
                                    <div className="cardFooter">
                                        <span className="discount">-{currentItem.discount}</span>
                                        <div className="priceContainer">
                                            <span className="oldprice">{currentItem.old_price}</span>
                                            <span className="pricetag">{currentItem.price}</span>
                                        </div>
                                    </div>
                                {/* </a> */}
                            </li>
                         );
                    })}
                </ul>
                <div className="arrow-right" onClick={handleNextClick}>
                    <Arrow width="4vmin" height='4vmin' className="arrow-span"/>
                </div>
            </section>
        </div>
        
    )
}

export default ContentItems;