import Header from "./components/main-page/header/header";
import NavigationBar from "./components/main-page/navigation/navigation";
import AboutUs from "./components/main-page/about-us/about-us";
import Transition from "./components/main-page/transition/transition"
import OurTeam from "./components/main-page/our-team/our-team";
import ContactUs from "./components/main-page/contact-us/contact-us";
import Footer from "./components/main-page/footer/footet";

function App() {
  return (
   <>
      <NavigationBar />
      <Header />
      <AboutUs />
      <Transition />
      <OurTeam />
      <ContactUs />
      <Footer />
   </>
  );
}

export default App;
