import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
import placeholder from './images/placeholder.jpg'

class Book extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  render() {

    const { book, books, updateShelf } = this.props
  
    return (
      <li className='book-item'>
        <div className='book-cover'>
          <div className=''>
            {book.imageLinks ? (
              <img style={{width: 128, height: 193}} src={book.imageLinks.smallThumbnail} alt={book.title}/>
            ) : ( 
              <img style={{width: 128, height: 193}} src={placeholder} alt={book.title}/> 
            )}
            <ShelfChanger 
              book={book}
              books={books}
              updateShelf={updateShelf}
            />
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-author'>{book.authors}</div>
      </li>  
    )
  }
}

export default Book