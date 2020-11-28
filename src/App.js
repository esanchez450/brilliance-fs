import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />         {/* exact makes sure only slash renders */}
          <Route path="/solutions"  component={Solutions} />
          <Route path="/about"  component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
          {/* <Route path="/shop/:id" component={ItemDetail} />  id can actually be any parameter */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
