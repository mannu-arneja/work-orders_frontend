import React from 'react';
import './app.css';
import SearchBar from '../search-bar/search-bar';
import WorkOrders from '../work-orders/work-orders';

class App extends React.Component {
  _isMounted = false;

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
    this._isMounted = true
    fetch('https://my-json-server.typicode.com/mannu-arneja/blog-railsapi/db')
      .then(results => {
        return results.json();
      }).then(data => {
        if (this._isMounted) {
            let workOrdersArr = data.orders;
            this.setState({
              workOrders: workOrdersArr,
            }, ()=> {
              this.populateWorkers();
            });
        }
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  populateWorkers = async () => {
    let workers = {};

    for (let order of this.state.workOrders) {
      if (!workers[order.workerId]) {
        await fetch(`https://my-json-server.typicode.com/mannu-arneja/blog-railsapi/workers/${order.workerId}`)
        .then(results => {
          return results.json();
        }).then(data => {
          workers[order.workerId] = data.worker
        })
      }
    }
    if (this._isMounted) {
      this.setState({
        workers: workers,
      })
    }
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
            workers={this.state.workers}
            filterText={this.state.filterText}
            sortDeadlineLatest={this.state.sortDeadlineLatest}
          />
        </header>
      </div>
    );
  }
}

export default App;
