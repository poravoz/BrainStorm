import './header.css'
import robot from './images/robot.png'
import { MdEmail } from "react-icons/md";

import {useState, useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';

import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [t] = useTranslation("global");
    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
    }

    const [{ theme }] = useContext(ThemeContext);
    
    return (
        <div className="container" style={{backgroundColor : theme.backgroundColor_header}}>
            <h2 className="title_header" style={{color: theme.color_header}}> {t("header.title_header")} 
                <img className="robot_header" style={{filter: theme.robot_header}} src={robot}/>
            </h2>
        </div>
    );
};

export default Header;