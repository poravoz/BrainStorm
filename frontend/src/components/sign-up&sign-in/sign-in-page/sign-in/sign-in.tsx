import { useTranslation } from "react-i18next";
import "./sign-in.css";
import { useContext, useState, FormEvent } from "react";
import { ThemeContext } from "../../../../contexts/theme";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignIn = () => {
    const [{ theme }] = useContext(ThemeContext);
    const [t] = useTranslation("global");
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/authentication/log-in', {
                email,
                password
            }, { withCredentials: true });

            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);

            navigate('/');
        } catch (error) {
            console.error('Sign In failed:', error);
        }
    };
    
    return (
        <div className="container_sign_in" style={{ backgroundColor: theme.backgroundColor_sign_up_sign_in }}>
            <form className="form_sign_in" style={{ backgroundColor: theme.backgroundColor_form_sign_up_sign_in }} onSubmit={handleSignIn}>
                <div className="header_sign_in">
                    <div className="text_sign_in" style={{ color: theme.color_text_sign_up_sign_in }}> {t("sign-up&sign-in.text_sign_in")} </div>
                    <div className="underline_sign_in" style={{ backgroundColor: theme.color_text_sign_up_sign_in }}></div>
                </div>

                <div className="inputs_sign_up">
                    <MdEmail size={20} className='mdEmail_sign_in' style={{ color: theme.color_icon_contact_us }} />
                    <p className="email_sign_in" style={{ color: theme.color_text_sign_up_sign_in }}> {t("sign-up&sign-in.text_up_placeholder_email")}</p>
                    <input required className="input_sign_in" type="email" placeholder={t("sign-up&sign-in.text_placeholder_email")} value={email} onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: theme.backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input }} />
                    <p className="password_sign_in" style={{ color: theme.color_text_sign_up_sign_in }}> {t("sign-up&sign-in.text_up_placeholder_password")} </p>
                    <input required className="input_sign_in" placeholder={t("sign-up&sign-in.text_placeholder_password")} value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: theme.backgroundColor_input_sign_up_sign_in, color: theme.color_text_sign_up_sign_in_input }} />
                </div>

                <div className="submit_container_sign_in">
                    <button className="submit_sign_in" style={{ backgroundColor: theme.backgroundColor_sign_up_sign_in_button, color: theme.color_sign_up_sign_in_button }}> {t("sign-up&sign-in.sign_in")} </button>
                </div>

                <p className="create_account_sign_in" style={{ color: theme.color_text_sign_up_sign_in }}> {t("sign-up&sign-in.sign_up_account_question")} <Link to="/register" className="create_account_sign_in_link"> {t("sign-up&sign-in.sign_up_account")} </Link></p>
            </form>
        </div>
    );
}

export default SignIn;
