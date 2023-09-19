import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <h1>APOD</h1>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
