import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Glow from './components/Glow';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <div id="blur"></div>
    <Glow />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
