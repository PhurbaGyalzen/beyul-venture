import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Pages/Landing/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import PackageDetail from './components/Pages/DetailP/PackageDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/package-detail" component={PackageDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
