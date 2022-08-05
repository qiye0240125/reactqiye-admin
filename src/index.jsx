import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/index';
import { Provider } from 'react-redux';
import store from './store'
import AppProvider from './componets/AppProvider';
import { BrowserRouter as Routers } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Routers>
            <AppProvider>
                <Router></Router>
            </AppProvider>
        </ Routers>
    </Provider>
);



