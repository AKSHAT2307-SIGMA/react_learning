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

  return (
    <div className="min-h-screen flex flex-col bg-gray-400">
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Loading...</h1>
        </div>
      ) : (
        <div className="w-full-block">
          <Header />
          <main className="py-8">
            <div className="container mx-auto">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
