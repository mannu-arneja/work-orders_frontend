import React from 'react';
import logo from '../../assets/images/logo.svg';
import './app.css';
import SearchBar from '../search-bar/search-bar';
import WorkOrders from '../work-orders/work-orders';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workOrders: [],
      workers: {},
      filterText: '',
      sortDeadlineLatest: false,
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSortDeadlineChange = this.handleSortDeadlineChange.bind(this);
    this.populateWorkers = this.populateWorkers.bind(this);
  };

  componentDidMount() {

    // fetch('https://www.***REMOVED***.io/api/assessment/work_orders')
    fetch('https://my-json-server.typicode.com/mannu-arneja/blog-railsapi/db')
      .then(results => {
        return results.json();
      }).then(data => {
        let workOrdersArr = data.orders;
        let workerIds = workOrdersArr.map(order => order.workerId)
        this.setState({
          workOrders: workOrdersArr,
        }, ()=> {
          this.populateWorkers(workerIds);
        });
      })
  }

  populateWorkers = async (ids) => {
    let workers = {};

    console.log(ids)
    // this.state.workOrders.forEach(order => {
    //   fetch(`https://www.***REMOVED***.io/api/assessment/workers/${order.workerId}`)
    //   .then(results => {
    //     return results.json();
    //   }).then(data => {
    //     workers[data.id] = data;
    //   })
    // })
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleSortDeadlineChange(checked) {
    this.setState({
      sortDeadlineLatest: checked
    });
  }
  
  render() {
      // console.log("state", this.state.workers)

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            filterText={this.state.filterText}
            sortDeadline={this.state.sortDeadline}
            onFilterTextChange={this.handleFilterTextChange}
            onSortDeadlineChange={this.handleSortDeadlineChange}
          />
          <WorkOrders 
            orders={this.state.workOrders}
            filterText={this.state.filterText}
            sortDeadline={this.state.sortDeadline}
          />
        </header>
      </div>
    );
  }
}

export default App;
