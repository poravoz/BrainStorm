import './header.css'
import robot from './images/robot.png'

const Header = () => {
    return (
        <div className="container">
            <h2 className="title_header">  Transform your ideas <br /> 
                                    into code, <br /> 
                                    code into success. <br /></h2>
        
            <img className="robot_header" src={robot}/>
        </div>
       
    );
};

export default Header;