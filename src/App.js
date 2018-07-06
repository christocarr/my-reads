import React, { Component } from 'react'
import './App.css'
import BookShelves from './BookShelves'

class App extends Component {
  
  // updateQuery = (query) => {
  //   this.setState({query: query.trim()})
  // }

  render() {
    return (
      <div className="App">
        <div>
          <input type='text' 
          placeholder='Search books' 
          // value={this.state.query}
          // onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
          <h1 className='app-header'>My Reads</h1>
          <BookShelves shelf='Currently Reading' />
          <BookShelves shelf='Want to Read' />
          <BookShelves shelf='Read' />
      </div>
    );
  }
}

export default App;
