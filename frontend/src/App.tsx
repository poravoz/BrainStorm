import Header from "./components/header/header";
import NavigationBar from "./components/navigation/navigation";
import AboutUs from "./components/about-us/about-us";
import Transition from "./components/transition/transition"
import OurTeam from "./components/our-team/our-team";
import ContactUs from "./components/contact-us/contact-us";

function App() {
  return (
   <>
      <NavigationBar />
      <Header />
      <AboutUs />
      <Transition />
      <OurTeam />
      <ContactUs />
   </>
  );
}

export default App;
