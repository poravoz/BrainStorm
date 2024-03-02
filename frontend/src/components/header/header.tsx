import './header.css'
import robot from './images/robot.png'

const Header = () => {
    return (
        <div className="container">
            <h2 className="title_header">  Transform your ideas <br /> 
                                    into code, <br /> 
                                    code into success. <br /></h2>
        
            <img className="robot_header" src={robot}/>

            <form className="form_signIn_header">
                <input className="input_signIn_header" type="email" /> <br />
                <input className="input_signIn_header" type="text" /> <br />
                <input className="input_signIn_header" type="password" /> <br />

                <button className="button_signIn_header" > Sign-Up </button>
            </form>

        </div>
       
    );
};

export default Header;