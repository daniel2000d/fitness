import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from '../src/Pages/LoginPage';
import AdminDashboard from './Pages/AdminDashboard';
import Antrenament from './Pages/AntrenamentPage';
import Diete from './Pages/DietePage';
import Consultanta from './Pages/ConsultantaPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/fitness" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/fitness/training" element={<Antrenament/>} />
        <Route path="/fitness/diets" element={<Diete />} />    
        <Route path="/fitness/consultation" element={<Consultanta />} />          

        
        <Route exact path="/admindashboard" component={AdminDashboard} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
