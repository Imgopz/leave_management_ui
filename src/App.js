import React, { Component } from 'react';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Leaves from './components/Leaves/Leaves';
import Employees from './components/Employees/Employees';
import './App.css';

const initialState = {
  route: 'home'
  }
  

class App extends Component {
  
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }
 

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
          { route === 'home'
          ? <Home />
          : (
             route === 'employees'
             ? <Employees />
             : <Leaves />
            )
          }
      </div>
    );
  }
}

export default App;
