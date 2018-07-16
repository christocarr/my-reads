import React, { Component } from 'react'
import Book from './Book'
 
class BookShelf extends Component {

  state 

  render(props) {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-heading'>{this.props.shelf}</h2>
        <ul className='book-list'>
          {this.props.books.map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BookShelf