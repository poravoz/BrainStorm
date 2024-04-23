import MainPage from './components/main-page/main-page';
import Store from './components/store-page/store';
import Device from './components/device-page/device';
import {Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './store';
import SignUpPage from './components/sign-up&sign-in/sign-up-page/sign-up-page';
import SignInPage from './components/sign-up&sign-in/sign-in-page/sign-in-page';

function App() {
  return (
    // <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/device" element={<Device />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    // </Provider>
  );
}

export default App;