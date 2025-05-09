import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import { ArrowUp } from 'lucide-react'; // Import the up arrow icon

// routers for web application
import Header from './components/Header';
import Home from './pages/Home';
import Activities from './pages/Activities';
import About from './pages/About';
import Impact from './pages/Impact';
import Team from './pages/Team'; 
import Footer from './components/Footer';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Activities" element={<Activities />} />
            <Route path="/About" element={<About />} />
            <Route path="/Impact" element={<Impact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          
          {/* Scroll to Top Button */}
          {showScrollButton && (
            <button 
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6" />
            </button>
          )}
        </>
      )}
    </Router>
  );
}

export default App;