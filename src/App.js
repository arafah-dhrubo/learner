import './App.css';
import React from 'react'
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/accounts/Login';
import Signup from './components/accounts/Signup';
import Single from './components/service/Single';
import NotFound from './components/NotFound/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/privateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/service/:id" element={<PrivateRoute><Single /></PrivateRoute>} />
          
          <Route path="" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
