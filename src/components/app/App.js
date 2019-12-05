import React from 'react';
import logo from '../../assets/images/logo.svg';
import './app.css';
import SearchBar from '../search-bar/search-bar';
import WorkOrders from '../work-orders/work-orders';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <WorkOrders />
        </header>
      </div>
    );
  }
}

export default App;
