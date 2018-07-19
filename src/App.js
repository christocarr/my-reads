//Bookcase that holds all shelves and books
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
          <Route path='/search' render={() => (
            <BookSearch 
              searchBooks={this.searchBooks}
              updateShelf={this.updateShelf}
            />
          )} />
          <Route path='/' exact render={() => (
            <BookShelves 
             books={this.state.books} 
             updateShelf={this.updateShelf}
            />
          )} />
          <Link
            to='/search'
            className='open-search'>
          </Link>
      </div>
    );
  }
}

export default App;
