import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/theme';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import global_en from './translation/en/global.json';
import global_ua from './translation/ua/global.json';
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    ua: {
      global: global_ua
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
