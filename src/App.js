//Bookcase that holds all shelves and books
import React, { Component } from 'react'
import './App.css'
import BookShelves from './BookShelves'
import BookSearch from './BookSearch'
import * as BookAPI from './BookAPI'

class App extends Component {

  state = {
    books: []
  }
  
  componentDidMount() {
    BookAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  
  
  render() {
    return (
      <div className="App">
          <h1 className='app-header'>My Reads</h1>
          <BookSearch 
             
          />
          <BookShelves 
            books={this.state.books} 
           />
          
      </div>
    );
  }
}

export default App;
