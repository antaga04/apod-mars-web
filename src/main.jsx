import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home/Home.jsx';
import Apod from './pages/Apod/Apod.jsx';
import Mars from './pages/Mars/Mars.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import { ThemeProvider } from './utils/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index="/home" element={<Home />} />
            <Route path="/apod" element={<Apod />} />
            <Route path="/mrp" element={<Mars />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
console.log('carga main');
