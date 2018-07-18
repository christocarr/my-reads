import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const { books, updateShelf } = this.props
    return(
      <ul className='book-list'>
        {books.map((book) => (
          <div key={book.id}>
            <Book 
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