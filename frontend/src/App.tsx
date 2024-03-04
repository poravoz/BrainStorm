import Header from "./components/header/header";
import NavigationBar from "./components/navigation/navigation";
import AboutUs from "./components/about-us/about-us";
import Transition from "./components/transition/transition"
import OurTeam from "./components/our-team/our-team";

function App() {
  return (
   <>
      <NavigationBar />
      <Header />
      <AboutUs />
      <Transition />
      <OurTeam />
   </>
  );
}

export default App;
