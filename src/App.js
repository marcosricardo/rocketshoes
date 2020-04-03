import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import store from './store';
import history from '~/services/history';
import { Router } from 'react-router-dom';

function App() {
  return (
        <Provider store={store}>
          <Router history={history}>
              <Header/>
              <Routes />
              <GlobalStyle />
              <ToastContainer autoClose={3000} />
          </Router>
        </Provider>
      );
}

export default App;
