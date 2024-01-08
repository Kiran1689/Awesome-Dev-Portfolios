import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignUp from './pages/signup.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@/app/globals.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/auth" element={<SignUp />} />
          <Route
            path="/"
            element={
              <>
                <App />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
)
