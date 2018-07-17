import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const { books } = this.props
    return(
      <ul className='book-list'>
        {books.map((book) => (
          <div className='bookshelf' key={book.id}>
            <Book 
              book={book} 
            />
          </div>
        ))}
      </ul>
    )
  }
}

export default BookShelf