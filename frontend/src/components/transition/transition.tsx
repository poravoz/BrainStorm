import './transition.css'
import robot from './images/robot.png'
import google_play_button from './images/google-play-badge.png'

const Transition = () => { 
    return(
       <div className="container_transition">
            <img className="robot_transition" src={robot} />
            <p className="text_transition"> Learn to code anytime, <br /> from anywhere </p>
            
            <a className='google_play_button_transition_a' href="">
                <img className="google_play_button_transition" src={google_play_button} /> 
            </a>
       </div>
    ) 
}

export default Transition;