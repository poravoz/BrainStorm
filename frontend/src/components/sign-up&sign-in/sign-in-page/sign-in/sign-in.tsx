import { useTranslation } from "react-i18next";
import "./sign-in.css"
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../contexts/theme";
import { MdEmail } from "react-icons/md";

import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

export default function SignIn() {
    const [{ theme }] = useContext(ThemeContext);
    const [t] = useTranslation("global");

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
    }
    return (
        <div className="container_sign_in" style={{backgroundColor: theme.backgroundColor_sign_up_sign_in}}>
            <form className="form_sign_in" style={{backgroundColor: theme.backgroundColor_form_sign_up_sign_in}}>
                <div className="header_sign_in">
                    <div className="text_sign_in" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_sign_up")} </div>
                    <div className="underline_sign_in" style={{backgroundColor: theme.color_text_sign_up_sign_in}}></div>
                </div>

                <div className="inputs_sign_up">
                    <MdEmail size={20} className='mdEmail_sign_in' style={{color: theme.color_icon_contact_us}} />
                    <p className="email_sign_in" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_email")}</p>
                    <input required className="input_sign_in" type="email" placeholder={t("sign-up&sign-in.text_placeholder_email")} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} />
                    <Icon onClick={handleToggle} className="mdPassword_sign_in" icon={icon} size={20} style={{color: theme.color_icon_header}} />
                    <p className="password_sign_in" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_password")} </p>
                    <input required className="input_sign_in" placeholder={t("sign-up&sign-in.text_placeholder_password")} value={password} type={type}  onChange={(e) => setPassword(e.target.value)} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} />
                </div>
                
                <div className="submit_container_sign_in">
                    <button className="submit_sign_in" style={{backgroundColor: theme.backgroundColor_sign_up_sign_in_button, color: theme.color_sign_up_sign_in_button}}> {t("sign-up&sign-in.text_button")} </button>
                </div>
            </form>
        </div>

    )
  }