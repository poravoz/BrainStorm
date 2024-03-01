import './assets/css/Header.css'

import miniRobot from './assets/images/miniRobot.png'

function Header() {
    return (
        <div className="container_header">
            <h2 className="text_header"> BrainStorm - some content </h2>
            <h4 className="text_subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> 
                 tempor incididunt ut labore et dolore magna aliqua. </h4>
            
            <button className= "button_read_more_header"> Read More </button>

            <img className='miniRobot_header' src={miniRobot} />
        </div>
    )
}

export default Header;