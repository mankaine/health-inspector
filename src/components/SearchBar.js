import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './SearchBar.css'
import PropTypes from 'prop-types'

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

  handleSubmit = (e) => {
    // HTML naturally refreshes a page on click of button - below stops such from happening 
    e.preventDefault()
    this.props.updateSearchTerm(this.state.search)
  }

  render() {
    // i is the tag for an icon element
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
         <button
          type="submit" 
          className="search-button"
          onClick={this.handleSubmit}
         >
          <i className="search-icon fa fa-search" />
         </button>
        </form>
      </div>
    )
  }
}

PropTypes.PropTypes = {
  updateSearchTerm: PropTypes.func.isRequired
}

export default SearchBar