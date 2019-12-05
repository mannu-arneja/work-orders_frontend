import React from 'react';
import logo from '../../assets/images/logo.svg';
import './app.css';
import SearchBar from '../search-bar/search-bar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar/>
        </header>
        
      </div>
    );
  }
}

export default App;
