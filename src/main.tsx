import React from 'react';
import { App as AntdAppWrapper, ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ButtonConfig } from './utils/ThemeConfig/ButtonConfig';
import { ThemeConfigList } from './utils/ThemeConfig/ThemeConfig';
import { setupStore } from './store/store';
import App from './App';
import './index.css';
import 'antd/dist/reset.css';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      button={ButtonConfig}
      autoInsertSpaceInButton
      theme={ThemeConfigList}
    >
      <AntdAppWrapper>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReduxProvider>
      </AntdAppWrapper>
    </ConfigProvider>
  </React.StrictMode>,
);
