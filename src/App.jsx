import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

 // routers for web application
import Header from './components/Header';
import Home from './pages/Home';
import Activities from './pages/Activities';
import About from './pages/About';
import Impact from './pages/Impact';


function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/About" element={<About />} />
      <Route path="/Impact" element={<Impact />} />
    </Routes>
    </Router>
    <Header />
    </>
  );
}

export default App;
