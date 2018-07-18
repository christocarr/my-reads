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

  updateShelf = (book, shelf) => {
    BookAPI.update(book, shelf).then((res) => {
      book.shelf = shelf
      const updatedBooks = this.state.books.filter(b => b.id !== book.id)
      updatedBooks.push(book)
      this.setState({books: updatedBooks})
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
            updateShelf={this.updateShelf}
           />
          <div className='open-search'>
          </div>
      </div>
    );
  }
}

export default App;
