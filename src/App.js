import React, { Component } from 'react';
import Header from './components/Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery';
import ServiceList from './containers/ServiceList';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Appointement from './components/Appointement'
const stylesApp = {
  marginTop: 0
}

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Header />
              <Route exact path="/" component={ Home} />
              <div className="contaner">
                <Route exact path="/services" component={ServiceList} />
                <Route exact path="/gallery" component={ Gallery} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/navbar" component={NavBar}/>
                <Route exact path="/Appointement" component={Appointement}/>
                <Route exact path="/aboutUs" component={AboutUs}/>
                
              </div>
          </div>
        </Router>
      
    );
  }
}

export default App;
