// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('status-200-excal')!).render(
  <GoogleOAuthProvider clientId="70503872081-m5789s4vvisbqs4ivruq3r0e52mo3p5n.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </GoogleOAuthProvider>
)
