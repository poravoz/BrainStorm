import "./contact-us.css"
import robotSendMessage from "./images/robotSendMessage.png"
import { MdEmail } from "react-icons/md";
import { GrAccessibility } from "react-icons/gr";

import {useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';
import { useTranslation } from "react-i18next";

const ContactUs = () => { 
    const [{ theme }] = useContext(ThemeContext);
    const [t] = useTranslation("global");
    
    return (
        <div className="container_contactUs" style={{backgroundColor: theme.backgroundColor_contact_us}} >
            <p className="text_contactUs" style={{color: theme.color_contact_us}}> {t("contact-us.contact-us")} </p> 
            <form className="form_contactUs">
                <GrAccessibility size={20} className="mdName_contact_us" style={{color: theme.color_icon_contact_us}} />
                <p className="name_contactUs" style={{color: theme.color_contact_us}}>{t("contact-us.text_up_placeholder_name")}</p>
                <input required placeholder={t("contact-us.placeholder_name")} className="input_contactUs" style={{backgroundColor: theme.backgroundColor_input_contact_us, color: theme.color_contact_us_input}} type="text" /> <br />
                <p className="email_contactUs" style={{color: theme.color_contact_us}}>{t("contact-us.text_up_placeholder_email")}</p>
                <MdEmail size={20} className='mdEmail_contact_us' style={{color: theme.color_icon_contact_us}} />
                <input required placeholder={t("contact-us.placeholder_email")}  className="input_contactUs" style={{backgroundColor: theme.backgroundColor_input_contact_us, color: theme.color_contact_us_input}} type="email"/> <br />
                <p className="message_contactUs" style={{color: theme.color_contact_us}}> {t("contact-us.text_up_placeholder_message")}</p>
                <textarea required placeholder={t("contact-us.placeholder_message")} className="textarea_contact_us" style={{backgroundColor: theme.backgroundColor_input_contact_us, color: theme.color_contact_us_input}}></textarea> <br />
                <button className="button_contactUs" style={{backgroundColor: theme.backgroundColor_button_contact_us, color: theme.color_contact_us_button}} > {t("contact-us.button_text")} </button>
                <img className="robotSendMessage_img" src={robotSendMessage} style={{filter: theme.robot_contact_us}} />
            </form>

        </div>
    )
}

export default ContactUs;