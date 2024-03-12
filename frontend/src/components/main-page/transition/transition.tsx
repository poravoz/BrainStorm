import './transition.css'
import robot from './images/robot.png'
import google_play_button from './images/google-play-badge.png'

import {useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';
import { useTranslation } from 'react-i18next';

const Transition = () => { 
    const [{ theme }] = useContext(ThemeContext);
    const [t] = useTranslation("global");
    
    return(
       <div className="container_transition" style={{backgroundColor: theme.backgroundColor_transition}}>
            <img className="robot_transition" style={{filter: theme.robot_transition}} src={robot} />
            <p className="text_transition" style={{color: theme.color_transition}}> {t("transition.text1")} <br /> {t("transition.text2")} </p>
            
            <a className='google_play_button_transition_a' href="">
                <img className="google_play_button_transition" src={google_play_button} /> 
            </a>
       </div>
    ) 
}

export default Transition;