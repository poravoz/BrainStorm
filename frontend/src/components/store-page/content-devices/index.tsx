import React, { useContext } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import ContentItems from '../content-items';
import monitors from '../../../data/monitors';
import keyboards from '../../../data/keyboards';
import mice from '../../../data/mice';
import mouse_pads from '../../../data/mouse_pads';
import Arrow from './icons/arrow';
import { ThemeContext } from '../../../contexts/theme';

const ContentDevices = () => {
    const [t] = useTranslation("global");
    const [{ theme }] = useContext(ThemeContext);

    return (
        <div>
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item" style={{ backgroundColor: theme.backgroundColor_about_us}}>{t("store-page.monitors")}</h2>
                <Arrow />
            </div>
            <ContentItems items={monitors} />
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.keyboards")}</h2>
                <Arrow />
            </div>
            <ContentItems items={keyboards} />
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.mice")}</h2>
                <Arrow />
            </div>
            <ContentItems items={mice}/>
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.mouse_pads")}</h2>
                <Arrow />
            </div>
            <ContentItems items={mouse_pads}/>
        </div>
        
    )
}

export default ContentDevices;