import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {data} from './settingsAndArray/array-for-slider'
import settings from './settingsAndArray/settigs-for-slider';

import './our-team.css';

const OurTeam = () => {
  return (
    <div className="container_our_team">
      <p className="text_our_team"> Our team </p>
      <Slider {...settings}>
        {data.map((item) => (
          <div>
            <img className="img_our_team" src={item.img} />
            <h3 className="name_our_team">{item.name}</h3>
            <h4 className="review_our_team">{item.review}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurTeam;
