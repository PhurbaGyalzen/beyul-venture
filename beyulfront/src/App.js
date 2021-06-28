import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Pages/Landing/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
