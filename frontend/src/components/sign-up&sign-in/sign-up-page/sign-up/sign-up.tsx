import { useTranslation } from "react-i18next";
import "./sign-up.css"
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../contexts/theme";
import { GrAccessibility } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { Link } from "react-router-dom";



export default function SignUp() {
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
        <div className="container_sign_up" style={{backgroundColor: theme.backgroundColor_sign_up_sign_in}}>
            <form className="form_sign_up" style={{backgroundColor: theme.backgroundColor_form_sign_up_sign_in}}>
                <div className="header_sign_up">
                    <div className="text_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_sign_up")} </div>
                    <div className="underline_sign_up" style={{backgroundColor: theme.color_text_sign_up_sign_in}}></div>
                </div>

                <div className="inputs_sign_up">
                    <GrAccessibility size={20} className="mdName_sign_up" style={{color: theme.color_icon_contact_us}} />
                    <p className="name_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_name")} </p>
                    <input required className="input_sign_up" type="text" placeholder={t("sign-up&sign-in.text_placeholder_name")} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} />
                    <MdEmail size={20} className='mdEmail_sign_up' style={{color: theme.color_icon_contact_us}} />
                    <p className="email_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_email")}</p>
                    <input required className="input_sign_up" type="email" placeholder={t("sign-up&sign-in.text_placeholder_email")} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} />
                    <Icon onClick={handleToggle} className="mdPassword_sign_up" icon={icon} size={20} style={{color: theme.color_icon_header}} />
                    <p className="password_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_password")} </p>
                    <input required className="input_sign_up" placeholder={t("sign-up&sign-in.text_placeholder_password")} value={password} type={type}  onChange={(e) => setPassword(e.target.value)} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} />
                </div>
                
                <div className="submit_container_sign_up">
                    <button className="submit_sign_up" style={{backgroundColor: theme.backgroundColor_sign_up_sign_in_button, color: theme.color_sign_up_sign_in_button}}> {t("sign-up&sign-in.sign_up")} </button>
                </div>

                <p className="create_acount_sign_up" style={{color: theme.color_text_sign_up_sign_in}}>You already have an account? <Link className="create_acount_sign_up_link" to="login"> Log in</Link></p>
            </form>
        </div>

    )
  }