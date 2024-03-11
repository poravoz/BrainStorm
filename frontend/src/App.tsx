import MainPage from './components/main-page/main-page';
import Store from './components/store/store';
import Photos from './components/photos/photos';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element = {<MainPage />} />
        <Route path="/store" element = {<Store />} />
        <Route path="/photos" element = {<Photos />} />
      </Routes>
  );
}

export default App;