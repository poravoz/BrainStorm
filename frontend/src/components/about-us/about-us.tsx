import './about-us.css'

const AboutUs = () => { 
    return(
        <div className="container_about_us">
             <p className='text_about_us'> About us</p>
            <div className="item_about_us">
                <div className="layer_about_us">
                    <h3 className="h3_about_us"> Creators of the Future </h3>
                        <p className="p_about_us">
                        Go on a journey into the world of programming 
                        with us! We are a team of inventors creating 
                        a unique application for learning programming. 
                        Our mission is not just to teach you how to code, 
                        but to open up to you the limitless possibilities 
                        of the technological future.
                        </p>
                </div>
            </div>

            <div className="item_about_us">
                <div className="layer_about_us">
                    <h3 className="h3_about_us"> Our Direction </h3>
                        <p className="p_about_us">   
                            We are not just an app - we are here to improve you. 
                            With our experience and passion for code, we give you 
                            the tools to learn programming successfully. 
                            Overcoming challenges is easy when you choose our way.
                        </p>
                </div>
            </div>

            <div className="item_about_us">
                <div className="layer_about_us">
                    <h3 className="h3_about_us"> Learning is Easy </h3>
                        <p className="p_about_us">
                            For us, every line of code is a step into the future. 
                            We are enthusiasts who create an educational application 
                            where each of you can discover the world of programming. 
                            Join us and let's change the world together with every 
                            block of code we write
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;