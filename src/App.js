// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Registration from './pages/Registration';
import Instructors from './pages/Instructors'; // Ensure this path is correct
import History from './pages/History';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router>
      <div className="bg-custom-blue text-white min-h-screen font-sans">
        <Header />
        <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/history" element={<History />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
