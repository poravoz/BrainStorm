import Header from "./components/header/header";
import NavigationBar from "./components/navigation/navigation";
import AboutUs from "./components/about-us/about-us";
import Transition from "./components/transition/transition"

function App() {
  return (
   <>
   <div className="body">
      <NavigationBar />
      <Header />
      <AboutUs />
      <Transition />
   </div>

    
   </>
  );
}

export default App;
