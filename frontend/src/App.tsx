import MainPage from './features/main-page/main-page';
import Store from './features/store-page/store-page';
import {Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SignUpPage from './features/sign-up&sign-in/sign-up-page/sign-up-page';
import SignInPage from './features/sign-up&sign-in/sign-in-page/sign-in-page';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </Provider>
  );
}

export default App;