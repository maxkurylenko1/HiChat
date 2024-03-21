import React from 'react';
import { App as AntdAppWrapper } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from 'store/store.ts';
import App from './App.tsx';
import './index.css';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AntdAppWrapper>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </AntdAppWrapper>
  </React.StrictMode>,
);
