import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Missing CLERK_PUBLISHABLE_KEY");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkKey}>
    <App />
  </ClerkProvider>
)
