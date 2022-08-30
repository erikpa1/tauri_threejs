import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import StorageManager from "./StorageManager";

const root = ReactDOM.createRoot(document.getElementById('root'));


StorageManager.Init().then(
    () => {
        root.render(

            <React.StrictMode>
                <React.Suspense fallback={""}>
                    <App/>
                </React.Suspense>
            </React.StrictMode>
        );
    }
)





