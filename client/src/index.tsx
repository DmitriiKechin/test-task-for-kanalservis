import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
//import { Provider } from 'react-redux';
import { App } from './App';
import { theme } from './DefaultTheme';
import { GlobalStyles } from './GlobalStyles';
//import { setupStore } from './store/store';

// const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
