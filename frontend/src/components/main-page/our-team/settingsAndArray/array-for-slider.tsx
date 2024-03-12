import { useTranslation } from 'react-i18next';
import dmytro from '../team-images/dmytro.jpg';
import kolya from '../team-images/kolya.jpg';
import valeria from '../team-images/valeria.jpg';
import yana from '../team-images/yana.jpg';



export const ArrayData = () => {
  const [t] = useTranslation("global");

  const data = [
    {
      name: t("our-team.slider-name1"),
      img: kolya,
      review: t("our-team.slider-review1"),
    },
    {
      name: t("our-team.slider-name2"),
      img: dmytro,
      review: t("our-team.slider-review2"),
    },
    {
      name: t("our-team.slider-name3"),
      img: valeria,
      review: t("our-team.slider-review3"),
    },
    {
      name: t("our-team.slider-name4"),
      img: yana,
      review: t("our-team.slider-review4"),
    },
  ];

  return data;
}
