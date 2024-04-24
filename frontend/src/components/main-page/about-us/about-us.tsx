import './about-us.css'
import {useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';
import { useTranslation } from 'react-i18next';

const AboutUs = () => { 
    const [{ theme }] = useContext(ThemeContext);
    const [t] = useTranslation("global");

    return(
        <div className="container_about_us" style={{backgroundColor: theme. backgroundColor_about_us}}>
             <p className='text_about_us' style={{color: theme.color_about_us}}> {t("about-us.about-us")} </p>
            <div className="item_about_us" style={{backgroundColor: theme.backgroundColor_item_about_us_1}}>
                <div className="layer_about_us" style={{backgroundColor: theme.backgroundColor_about_us_card, border: theme.border_about_us_card}}>
                    <h3 className="h3_about_us" style={{color: theme.color_about_us_card}}> {t("about-us.title-card1")} </h3>
                        <p className="p_about_us" style={{color: theme.color_about_us_card}}>
                            {t("about-us.text-card1")}
                        </p>
                </div>
            </div>

            <div className="item_about_us" style={{backgroundColor: theme.backgroundColor_item_about_us_2}}>
                <div className="layer_about_us" style={{backgroundColor: theme.backgroundColor_about_us_card, border: theme.border_about_us_card}}>
                    <h3 className="h3_about_us" style={{color: theme.color_about_us_card}}> {t("about-us.title-card2")} </h3>
                        <p className="p_about_us" style={{color: theme.color_about_us_card}}>   
                            {t("about-us.text-card2")}
                        </p>
                </div>
            </div>

            <div className="item_about_us" style={{backgroundColor: theme.backgroundColor_item_about_us_3}}>
                <div className="layer_about_us" style={{backgroundColor: theme.backgroundColor_about_us_card, border: theme.border_about_us_card}}>
                    <h3 className="h3_about_us" style={{color: theme.color_about_us_card}}> {t("about-us.title-card3")} </h3>
                        <p className="p_about_us" style={{color: theme.color_about_us_card}}>
                            {t("about-us.text-card3")}
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;