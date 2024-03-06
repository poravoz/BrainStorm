import "./contact-us.css"
import robotSendMessage from "./images/robotSendMessage.png"

const ContactUs = () => { 
    return (
        <div className="container_contactUs">
            <p className="text_contactUs"> Contact us </p> 
            <form className="form_contactUs">
                <p className="name_contactUs">Name:</p>
                <input placeholder="Your name" className="input_contactUs" type="text" /> <br />
                <p className="email_contactUs">Email:</p>
                <input placeholder="Your email" className="input_contactUs" type="email"/> <br />
                <p className="message_contactUs"> Your message: </p>
                <textarea className="textarea_contact_us" placeholder="Enter Something"></textarea> <br />
                <button className="button_contactUs" > Submit </button>
                <img className="robotSendMessage_img" src={robotSendMessage} />
            </form>

        </div>
    )
}

export default ContactUs;