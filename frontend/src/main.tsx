import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App';
import { ErrorProvider } from './context/ErrorProvider';
// import { ErrorBoundaryWithLogging } from './components/ErrorHandling/ErrorBoundaryWithLogging';
// TODO: Uncomment and fix the path below if the file exists, or remove this import if not needed.

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorProvider>
      {/* Uncomment the following lines if ErrorBoundaryWithLogging is available */}
      {/* 
      <ErrorBoundaryWithLogging>
        <App />
      </ErrorBoundaryWithLogging>
      */}
      {/* Otherwise, render App directly */}
      <App />
    </ErrorProvider>
  </React.StrictMode>,
)