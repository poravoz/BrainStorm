import './header.css'
import robot from './images/robot.png'
import { MdEmail, MdPassword } from "react-icons/md";

import {useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';

const Header = () => {

    const [{ theme }] = useContext(ThemeContext);

    return (
        <div className="container" style={{backgroundColor : theme.backgroundColor_header}}>
            <h2 className="title_header" style={{color: theme.color_header}}>  Transform your ideas <br /> 
                                    into code, <br /> 
                                    code into success. <br /></h2>

            <form className="form_signUp_header">
            <img className="robot_header" src={robot}/>
                <p className="email_header" style={{color: theme.color_header}}>Email:</p>
                <MdEmail size={25} className='mdEmail_header' color="#05386b" />
                <input placeholder="Your email" className="input_signUp_header" style={{backgroundColor : theme.backgroundColor_header_input, color: theme.color_header}}  type="email" /> <br />
                
                <MdPassword size={25} className='mdPassword_header' color="#05386b" />
                
                <p className="password_header" style={{color: theme.color_header}}>Password:</p>
                <input placeholder="Your password" className="input_signUp_header" style={{backgroundColor : theme.backgroundColor_header_input, color: theme.color_header}} type="password"/> <br />           
                <button className="button_signUp_header" style={{backgroundColor: theme.backgroundColor_header_button, color: theme.color_header_button }} > Sign up </button>
            </form>

        </div>
       
    );
};

export default Header;