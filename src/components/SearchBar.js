import React from 'react'

class SearchBar extends React.Component { 
  constructor() { 
    super()
    
    this.state = {
      search: ""
    }
  }

  handleSearchChange = (e) => {
    /* Why does this guy remind me of Owen Wilson */
    this.setState({
      // Value provided inside of [] is the key (ES6)
      [e.target.name]: e.target.value  
    })  
    // Change the state in the HTML 
  }

  render() {
    return (
      <div className="searchbar-container">
        <form className="search-form">
         <input 
            type="search"
            name="search"
            value={this.state.search}
            className="search-input"
            placeholder="Search Restaurants"
            onChange={this.handleSearchChange}
         /> 
        </form>
      </div>
    )
  }
}

export default SearchBar