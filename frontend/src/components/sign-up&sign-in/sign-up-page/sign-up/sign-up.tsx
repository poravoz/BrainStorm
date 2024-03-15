import { useTranslation } from "react-i18next";
import "./sign-up.css"
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../contexts/theme";
import { GrAccessibility } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'



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
        <div className="container_sign_up">
            <form className="form_sign_up">
                <div className="header_sign_up">
                    <div className="text_sign_up"> Sign-Up </div>
                    <div className="underline_sign_up"></div>
                </div>

                <div className="inputs_sign_up">
                    <GrAccessibility size={20} className="mdName_sign_up" style={{color: theme.color_icon_contact_us}} />
                    <input required className="input_sign_up" type="text" placeholder="Your name" />
                    <MdEmail size={20} className='mdEmail_sign_up' style={{color: theme.color_icon_contact_us}} />
                    <input required className="input_sign_up" type="email" placeholder="Your email" />
                    <Icon onClick={handleToggle} className="mdPassword_sign_up" icon={icon} size={20} style={{color: theme.color_icon_header}} />
                    <input required className="input_sign_up" placeholder="Your password" value={password} type={type}  onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div className="submit_container_sign_up">
                    <button className="submit_sign_up"> Sign Up</button>
                </div>
            </form>
        </div>

    )
  }