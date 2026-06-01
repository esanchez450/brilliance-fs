import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/"          element={<Home />}      />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about"     element={<About />}     />
          <Route path="/contact"   element={<Contact />}   />
          <Route path="/blog"      element={<Blog />}      />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
