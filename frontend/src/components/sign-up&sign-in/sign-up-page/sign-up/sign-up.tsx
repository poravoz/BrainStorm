import { useTranslation } from "react-i18next";
import "./sign-up.css"
import { useContext, useState, FormEvent } from "react";
import { ThemeContext } from "../../../../contexts/theme";
import { GrAccessibility } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import axios from 'axios';

export default function SignUp() {
    const [{ theme }] = useContext(ThemeContext);
    const [t] = useTranslation("global");

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e : FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/authentication/register', {
                email,
                name,
                password
            });
            window.location.href = 'http://localhost:3000/login';
        } catch (error) {
            console.error('Registration failed:', error);
            console.log('Request data:', { email, name, password });
        }
    };


    return (
        <div className="container_sign_up" style={{backgroundColor: theme.backgroundColor_sign_up_sign_in}}>
            <form className="form_sign_up" style={{backgroundColor: theme.backgroundColor_form_sign_up_sign_in}} onSubmit={handleSignUp}>
                <div className="header_sign_up">
                    <div className="text_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_sign_up")} </div>
                    <div className="underline_sign_up" style={{backgroundColor: theme.color_text_sign_up_sign_in}}></div>
                </div>

                <div className="inputs_sign_up">
                <MdEmail size={20} className='mdName_sign_up' style={{color: theme.color_icon_contact_us}} />
                    <p className="email_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_email")}</p>
                    <input required className="input_sign_up" type="email" placeholder={t("sign-up&sign-in.text_placeholder_email")} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} value={email}  onChange={(event) => setEmail(event.target.value)} />
                    <GrAccessibility size={20} className="mdEmail_sign_up" style={{color: theme.color_icon_contact_us}} />
                    <p className="name_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_name")} </p>
                    <input required className="input_sign_up" type="text" placeholder={t("sign-up&sign-in.text_placeholder_name")} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} value={name}  onChange={(event) => setName(event.target.value)}/>
                    <p className="password_sign_up" style={{color: theme.color_text_sign_up_sign_in}}> {t("sign-up&sign-in.text_up_placeholder_password")} </p>
                    <input required className="input_sign_up" placeholder={t("sign-up&sign-in.text_placeholder_password")} style={{backgroundColor: theme. backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input}} value={password}  onChange={(event) => setPassword(event.target.value)} />
                </div>
                
                <div className="submit_container_sign_up">
                    <button className="submit_sign_up" style={{backgroundColor: theme.backgroundColor_sign_up_sign_in_button, color: theme.color_sign_up_sign_in_button}}> {t("sign-up&sign-in.sign_up")} </button>
                </div>

                <p className="create_account_sign_up" style={{color: theme.color_text_sign_up_sign_in}}>{t("sign-up&sign-in.sign_in_account")} <Link className="create_account_sign_up_link" to="/login"> {t("sign-up&sign-in.text_sign_in")} </Link></p>
            </form>
        </div>

    )
  }