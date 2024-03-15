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
            <h2 className="title_header" style={{color: theme.color_header}}> {t("header.title_header")} </h2>

            <form className="form_signUp_header">
            <img className="robot_header" style={{filter: theme.robot_header}} src={robot}/>
                <p className="email_header" style={{color: theme.color_header}}>{t("header.text_up_placeholder_email")}</p>
                <MdEmail size={20} className='mdEmail_header' style={{color: theme.color_icon_header}} />
                <input required placeholder={t("header.placeholder_email")} className="input_signUp_header" style={{backgroundColor : theme.backgroundColor_header_input, color: theme.color_header_input}}  type="email" /> <br />
                
                <Icon onClick={handleToggle} className="mdPassword_header" icon={icon} size={20} style={{color: theme.color_icon_header}}/>
                <p className="password_header" style={{color: theme.color_header}}>{t("header.text_up_placeholder_password")}</p>
                <input required placeholder={t("header.placeholder_password")} className="input_signUp_header" style={{backgroundColor : theme.backgroundColor_header_input, color: theme.color_header_input}} type={type} value={password} onChange={(e) => setPassword(e.target.value)}/> <br />                 
                <button className="button_signUp_header" style={{backgroundColor: theme.backgroundColor_header_button, color: theme.color_header_button }} > {t("header.text_button")} </button>
            </form>
        </div>
       
    );
};

export default Header;