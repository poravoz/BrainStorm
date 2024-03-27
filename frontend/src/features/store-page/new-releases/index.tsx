import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';


const NewReleases = () => {
    const [t] = useTranslation("global");

    return (
        <div className="new-releases">
            <div className="link-to-certain-category-item">
                <h2 className="h2-link-to-certain-category-item">{t("store-page.new_releases")}</h2>
            </div>
            <div className="releases">
                <div className="one-release">
                    <div className="detail-one-release" style={{ backgroundImage: `url("assets/ps5-xbox-2.jpg")`}}>
                    <div className="background-image" style={{ backgroundImage: `url("assets/ps5-xbox-2.jpg")`}}></div>
                        <div className="buttons-new-releases">
                            <a href="#!" className="btn-new-releases">{t("store-page.read_more")}</a>
                        </div>
                    </div>
                    <p className="text-new-releases">{t("store-page.new_releases_ps5_xbox")}</p>
                </div>
                <div className="one-release">
                    <div className="detail-one-release">
                    <div className="background-image" style={{ backgroundImage: `url("assets/new-releases-game.png")`}}></div>
                        <div className="buttons-new-releases">
                            <a href="#!" className="btn-new-releases">{t("store-page.read_more")}</a>
                        </div>
                    </div>
                    <p className="text-new-releases">{t("store-page.new_releases_games")}</p>
                </div>
            </div>
        </div>
    )
}

export default NewReleases;