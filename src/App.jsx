import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useTheme } from './utils/ThemeContext';

function App() {
  const { theme } = useTheme('light');
  // console.log('carga app');

  return (
    <div id="app" className={theme}>
      <div className="cursor hidden">
        <div className="colorOne"></div>
        <div className="colorTwo"></div>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
