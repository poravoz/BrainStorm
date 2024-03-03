import Header from "./components/header/header";
import NavigationBar from "./components/navigation/navigation";
import AboutUs from "./components/about-us/about-us";
import Transition from "./components/transition/transition"

function App() {
  return (
   <>
    <NavigationBar />
    <Header />
    <AboutUs />
    <Transition />
    
   </>
  );
}

export default App;
