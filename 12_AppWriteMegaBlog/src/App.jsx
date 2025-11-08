import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
 import { Header, Footer } from "./components"  // Uncomment once you have these components
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-400">
      <div>Test</div>
      <div className="w-full-block">
        {/* <Header /> */}
        <main>
          <h1>Welcome to MegaBlog</h1>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : null
}

export default App
