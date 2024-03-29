import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyleResets } from './styles/Base';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StyleResets />
        <App />
    </React.StrictMode>,
);

