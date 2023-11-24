import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';
import { ClassProvider } from './components/Layout/ClassContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassProvider defaultClass="bodyCoverRight">
      <App />
    </ClassProvider>
  </React.StrictMode>
);
