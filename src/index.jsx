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
    //react-redux
    <Provider store={store}>
        {/* router */}
        <Routers>
            {/* 校验token */}
            <AppProvider>
                {/* Router */}
                <Router></Router>
            </AppProvider>
        </ Routers>
    </Provider>
);



