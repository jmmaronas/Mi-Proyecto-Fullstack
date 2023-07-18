import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import CartProvider from './context/CartContext.js';
import UserProvider from './context/UserContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <CartProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    </UserProvider>
);
