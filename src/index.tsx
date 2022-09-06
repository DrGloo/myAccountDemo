import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SignIn from './SignIn'
import {AuthProvider} from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </React.StrictMode>
)
