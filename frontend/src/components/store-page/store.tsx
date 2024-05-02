import { CSSProperties, useContext } from 'react';
import NavigationBar from "../main-page/navigation/navigation";
import OptionsTechDevices from './options-tech-devices';
import PopularDevices from './popular-devices';
import ContentDevices from './content-devices';
import NewReleases from './new-releases';
import Footer from "../main-page/footer/footet";
import "../../styles/variables.css";
import { ThemeContext } from '../../contexts/theme';


const Store = () => {
  const containerStyle: CSSProperties = {
    margin: '0 10vw'
  };

  const [{ theme }] = useContext(ThemeContext);

  return (
    <div style={{backgroundColor : theme.backgroundColor_store, position: `relative`}}>
      <div style={containerStyle}>
      <NavigationBar />
      <OptionsTechDevices />
      {/* <PopularDevices /> */}
      <ContentDevices />
      {/* <NewReleases /> */}
      </div>
      <Footer />
    </div>

  )
}

export default Store;