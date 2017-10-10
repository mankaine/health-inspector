import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/SearchBar'
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  // this function is binded to App, another function
  this.updateSearchTerm = (searchTerm) => {
    // ` is a backtick - it allows string interpolation
    // This is a Javascript thing - it's independent of React
    console.log(`We are searching for ${searchTerm}`)
    // .then takes a function that executes upon this.getSearchData(searchTerm)'s completion.
    // The "data" parameter is a function that takes in the data
    this.getSearchData(searchTerm).then((data) => {
      console.log(data)
    })
  }

  // Create a promise for retrieval of information - then display data. Async avoids callback statements (i.e. callback hell)
  // Library is async/await. Function - use asynch; await - don't move until data is retrieved (ex of syntatic sugar)
  this.getSearchData = async (searchTerm) => {
    let response 
    try {
      // fetch is part of a library that makes API calls. Fetch returns a promise that you must make another function call on in order to retrieve data (the promise invovles meta data, the ACTUAL data, etc)
      // await = ??? 
      response = await fetch (`https://data.cityofchicago.org/resource/cwig-ma7x.json?$query=SELECT * where Contains(upper(dba_name), upper("${searchTerm}")) or Contains(upper(aka_name), upper("${searchTerm}"))`)
    } catch (e) {
      console.log(e)
    }
    let data
    try {
      data = await response.json()
    } catch (e) {
      console.log(e)
    }
    return data
  }

  return (
    <div>
      <SearchBar
        updateSearchTerm={this.updateSearchTerm}
       />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

registerServiceWorker();
