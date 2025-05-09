import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
  return (
    <Router>
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
      </>
    </Router>
  );
}

export default App;