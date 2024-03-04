import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './our-team.css';

import dmytro from './team-images/dmytro.jpg';
import kolya from './team-images/kolya.jpg';
import valeria from './team-images/valeria.jpg';
import yana from './team-images/yana.jpg';


const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container_our_team">
      <p className="text_our_team"> Our team </p>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <img className="img_our_team" src={item.img} alt={item.name} />
            <h3 className="name_our_team">{item.name}</h3>
            <p className="review_our_team">{item.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    name: `Mykola Rud`,
    img: kolya,
    review: `TEST`
  },
  {
    name: `Dmytro Zavorotniy`,
    img: dmytro,
    review: `The main one decided`
  },
  {
    name: `Valeria Konovalchuk`,
    img: valeria,
    review: `Brief description`
  },
  {
    name: `Yana Trofymenko`,
    img: yana,
    review: `TEST`
  },
];

export default OurTeam;
