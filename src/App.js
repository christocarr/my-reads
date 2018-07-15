import React, { Component } from 'react'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import * as BookAPI from './BookAPI'

class App extends Component {

  state = {
    books: []
  }
  
  componentDidMount() {
    BookAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(this.state)
    })
  }

  removeBook = (book) => {
    this.setState ((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {
    return (
      <div className="App">
          <h1 className='app-header'>My Reads</h1>
          <BookSearch />
          <BookShelf shelf='Currently Reading' books={this.state.books} />
          <BookShelf shelf='Want to Read' books={this.state.books}/>
          <BookShelf shelf='Read' books={this.state.books}/>
      </div>
    );
  }
}

export default App;
