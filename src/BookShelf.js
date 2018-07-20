import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { books, updateShelf } = this.props
    return(
      <ul className='book-list'>
        {books.map((book) => (
          <div key={book.id}>
            <Book 
              books={books}
              book={book} 
              updateShelf={updateShelf}
            />
          </div>
        ))}
      </ul>
    )
  }
}

export default BookShelf