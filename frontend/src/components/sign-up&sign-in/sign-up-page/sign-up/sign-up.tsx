import "./sign-up.css"

export default function SignUp() {
    return (

        <div className="container_sign_up">
            <form className="form_sign_up">
                <div className="header_sign_up">
                    <div className="text_sign_up"> Sign-Up </div>
                    <div className="underline_sign_up"></div>
                </div>

                <div className="inputs_sign_up">
                    <input required className="input_sign_up" type="text" placeholder="Your name" />
                    <input required className="input_sign_up" type="email" placeholder="Your email" />
                    <input required className="input_sign_up" type="password" placeholder="Your password" />
                </div>
                
                <div className="submit_container_sign_up">
                    <button className="submit_sign_up"> Sign Up</button>
                </div>
            </form>
        </div>

    )
  }