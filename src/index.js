import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './Service';
import App from './App';
import MovieDetails from './Constants/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieDetails>
    <App />
    </MovieDetails>
  </React.StrictMode>
);
serviceWorker.register();
