import React from 'react';
import './search-bar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleSortDeadlineChange = this.handleSortDeadlineChange.bind(this);
    };

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleSortDeadlineChange(e) {
        this.props.onSortDeadlineChange(e.target.checked);
    }


    render() {
        return (
            <div className='search-bar-container'>
                <form className="search-bar-form">
                    <input 
                        id="name-input" 
                        type="text" 
                        placeholder='Filter by worker name...'
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                    <div className='switch-container'>
                        <span>Earliest First</span>
                        <label className="switch">
                            <input
                                id="deadline-input"
                                type="checkbox"
                                checked={this.props.sortDeadline}
                                onChange={this.handleSortDeadlineChange}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span>Latest First</span>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;