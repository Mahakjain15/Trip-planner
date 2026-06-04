import React, { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Gracefully handle/ignore benign Vite HMR WebSocket errors in the sandboxed preview environment
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (
      reason &&
      (reason === 'WebSocket closed without opened.' ||
       (typeof reason === 'string' && reason.includes('WebSocket')) ||
       (reason.message && typeof reason.message === 'string' && reason.message.includes('WebSocket')) ||
       (reason.stack && typeof reason.stack === 'string' && reason.stack.includes('WebSocket')))
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });

  window.addEventListener('error', (event) => {
    const msg = event.message || '';
    if (
      (typeof msg === 'string' && (msg.includes('WebSocket') || msg.includes('websocket')))
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

