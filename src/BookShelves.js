import React, { Component } from 'react'
import Books from './Books'
import * as BookAPI from './BookAPI'
 
class BookShelves extends Component {

state = {
  books: []
}

componentDidMount() {
  BookAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

  removeBook = (book) => {
    this.setState ((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render(props) {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-heading'>{this.props.shelf}</h2>
        <Books onDeleteBook={this.removeBook} books={this.state.books} />
      </div>
    )
  }
}

export default BookShelves