import React from 'react';
import logo from '../../assets/images/logo.svg';
import './app.css';
import SearchBar from '../search-bar/search-bar';
import WorkOrders from '../work-orders/work-orders';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workOrders: [],
    }
  };

  componentDidMount() {

    // fetch('https://www.***REMOVED***.io/api/assessment/work_orders')
    fetch('https://my-json-server.typicode.com/mannu-arneja/blog-railsapi/db')
      .then(results => {
        return results.json();
      }).then(data => {
        let workOrdersArr = data.orders;
        this.setState({
          workOrders: workOrdersArr,
        });
      })
  }
  
  render() {
      // console.log("state", this.state.workOrders)

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <WorkOrders 
            orders={this.state.workOrders}
          />
        </header>
      </div>
    );
  }
}

export default App;
