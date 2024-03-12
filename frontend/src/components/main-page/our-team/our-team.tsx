import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {data} from './settingsAndArray/array-for-slider'
import settings from './settingsAndArray/settigs-for-slider';

import './our-team.css';

import {useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';
import { useTranslation } from 'react-i18next';

const OurTeam = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [t] = useTranslation("global");
  return (
    <div className="container_our_team" style={{backgroundColor: theme.backgroundColor_our_team}}>
      <p className="text_our_team" style={{color: theme.color_our_team}}> {t("our-team.our-team")} </p>
      <Slider {...settings}>
        {data.map((item) => (
            <>
              <img className="img_our_team" src={item.img} />
              <h3 className="name_our_team" style={{color: theme.color_our_team}}>{item.name}</h3>
              <h4 className="review_our_team" style={{color: theme.color_our_team}}>{item.review}</h4>
            </>
        ))}
      </Slider>
    </div>
  );
}

export default OurTeam;
