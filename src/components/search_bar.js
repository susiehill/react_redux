<script src="http://localhost:8097"></script>

import React, { Component } from 'react';

//functional component
// const SearchBar = () => {
//     return <input />
// };

//class component
class SearchBar extends Component {
//construct state
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    //render a search bar in the browser
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    //when a user enters a search term, use the term to perform a search 
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;