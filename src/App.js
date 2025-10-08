import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import PersonalInvestigation from './pages/services/PersonalInvestigation';
import FraudInvestigation from './pages/services/FraudInvestigation';
import MissingPersons from './pages/services/MissingPersons';
import CovertSurveillance from './pages/services/CovertSurveillance';
import BackgroundChecking from './pages/services/BackgroundChecking';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/services/personal-investigation" element={<PersonalInvestigation />} />
            <Route path="/services/fraud-investigation" element={<FraudInvestigation />} />
            <Route path="/services/missing-persons" element={<MissingPersons />} />
            <Route path="/services/covert-surveillance" element={<CovertSurveillance />} />
            <Route path="/services/background-checking" element={<BackgroundChecking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
