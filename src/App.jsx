import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Intro from './views/Intro';
import About from './views/About';
import Contact from './views/Contact';
import Links from './components/Links';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div className='Links_Container'>
            <Links />
          </div>
          <div className='Component_container'>
            <Switch>
              <Route path='/' exact component={Intro} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/portfolio' exact component={List} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
