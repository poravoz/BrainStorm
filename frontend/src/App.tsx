import MainPage from './components/main-page/main-page';
import Store from './components/store-page/store';
import {Routes, Route} from 'react-router-dom';
import SignUpPage from './components/sign-up&sign-in/sign-up-page/sign-up-page';
import SignInPage from './components/sign-up&sign-in/sign-in-page/sign-in-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/store" element={<Store />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/login" element={<SignInPage />} />
    </Routes>
  );
}

export default App;