import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/index';
import AppProvider from './componets/AppProvider';
import { BrowserRouter as Routers } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routers>
        <AppProvider>
            <Router></Router>
        </AppProvider>
    </ Routers>
);



