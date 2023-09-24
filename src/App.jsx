import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="cursor hidden">
        <div className="colorOne"></div>
        <div className="colorTwo"></div>
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
