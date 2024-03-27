import Header from "./header/header";
import NavigationBar from "./navigation/navigation";
import AboutUs from "./about-us/about-us";
import Transition from "./transition/transition"
import OurTeam from "./our-team/our-team";
import ContactUs from "./contact-us/contact-us";
import Footer from "./footer/footet";
import ScrollToTop from "../scroll-to-top/scroll-to-top";



function MainPage() {
    return (
        <>
            <NavigationBar /> 
            <Header />
            <AboutUs />
            <Transition />
            <OurTeam />
            <ContactUs />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default MainPage;