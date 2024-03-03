import './header.css'
import robot from './images/robot.png'
import { MdEmail, MdPassword } from "react-icons/md";

const Header = () => {
    return (
        <div className="container">
            <h2 className="title_header">  Transform your ideas <br /> 
                                    into code, <br /> 
                                    code into success. <br /></h2>
        
            <img className="robot_header" src={robot}/>

            <form className="form_signUp_header">
                <MdEmail size={25} className='mdEmail_header' color='#05386b' />
                <input placeholder="Your email" className="input_signUp_header" type="email" /> <br />
                
                <MdPassword size={25} className='mdPassword_header' color='#05386b' />
                <input placeholder="Your password" className="input_signUp_header" type="password"/> <br />
                <button className="button_signUp_header" > Sign up </button>
            </form>

        </div>
       
    );
};

export default Header;