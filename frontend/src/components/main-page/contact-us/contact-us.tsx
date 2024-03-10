import "./contact-us.css"
import robotSendMessage from "./images/robotSendMessage.png"
import { MdEmail } from "react-icons/md";
import { GrAccessibility } from "react-icons/gr";

import {useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';

const ContactUs = () => { 
    const [{ theme }] = useContext(ThemeContext);
    return (
        <div className="container_contactUs" style={{backgroundColor: theme.backgroundColor_contact_us}} >
            <p className="text_contactUs" style={{color: theme.color_contact_us}}> Contact us </p> 
            <form className="form_contactUs">
                <GrAccessibility size={25} className="mdName_contact_us" color='#05386b' />
                <p className="name_contactUs" style={{color: theme.color_contact_us}}>Name:</p>
                <input placeholder="Your name" className="input_contactUs" style={{backgroundColor: theme.backgroundColor_input_contact_us}} type="text" /> <br />
                <p className="email_contactUs" style={{color: theme.color_contact_us}}>Email:</p>
                <MdEmail size={25} className='mdEmail_contact_us' color='#05386b' />
                <input placeholder="Your email" className="input_contactUs" style={{backgroundColor: theme.backgroundColor_input_contact_us}} type="email"/> <br />
                <p className="message_contactUs" style={{color: theme.color_contact_us}}> Your message: </p>
                <textarea className="textarea_contact_us" style={{backgroundColor: theme.backgroundColor_input_contact_us}} placeholder="Enter Something"></textarea> <br />
                <button className="button_contactUs" style={{backgroundColor: theme.backgroundColor_button_contact_us, color: theme.color_contact_us_button}} > Submit </button>
                <img className="robotSendMessage_img" src={robotSendMessage} />
            </form>

        </div>
    )
}

export default ContactUs;