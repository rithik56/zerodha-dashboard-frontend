import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { isProduction } from "./config/constants";
import './index.css'
import App from './App'

async function enableMocking() {
  if (isProduction) {
    return
  }
 
  const { worker } = await import('./mocks/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})