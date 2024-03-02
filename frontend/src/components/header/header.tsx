import './header.css'
import robot from './images/robot.png'

const Header = () => {
    return (
        <div className="container">
            <h2 className="title_header">  Transform your ideas <br /> 
                                    into code, <br /> 
                                    code into success. <br /></h2>
        
            <img className="robot_header" src={robot}/>

            <form className="form_signUp_header">
                <input placeholder="Your email" className="input_signUp_header" type="email" /> <br />
                <input placeholder="Your password" className="input_signUp_header" type="password" /> <br />

                <button className="button_signUp_header" > Sign up </button>
            </form>

        </div>
       
    );
};

export default Header;