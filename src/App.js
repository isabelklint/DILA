import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProgramDetails from './pages/ProgramDetails';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import CourseCatalog from './pages/CourseCatalog';
import Docents from './pages/Docents';
import AdminTeam from './pages/AdminTeam';
import PueblaCityDescription from './pages/PueblaCityDescription';
import BuapDescription from './pages/BuapDescription';
import IlvDescription from './pages/IlvDescription';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program-details" element={<ProgramDetails />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course-catalog" element={<CourseCatalog />} />
            <Route path="/docents" element={<Docents />} />
            <Route path="/admin-team" element={<AdminTeam />} />
            <Route path="/puebla-city-description" element={<PueblaCityDescription />} />
            <Route path="/buap-description" element={<BuapDescription />} />
            <Route path="/ilv-description" element={<IlvDescription />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
