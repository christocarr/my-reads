import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

  render() {
    const { book, updateShelf } = this.props
    return (
      <li>
        <div className='book-item'>
          <div className=''>
            <img src={book.imageLinks.smallThumbnail} alt={book.title}/>
            <ShelfChanger 
              shelf={book.shelf}
              book={book}
              updateShelf={updateShelf}
            />
          </div>
        </div>
      </li>  
    )
  }
}

export default Book