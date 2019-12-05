import React from 'react';
import './search-bar.css';

class SearchBar extends React.Component {


    render() {
        return (
            <form>
                <input id="name-input" type="text" placeholder='Filter by worker name...'/>
                <label class="switch">
                    <input id="deadline-input" type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </form>
        )
    }
}

export default SearchBar;