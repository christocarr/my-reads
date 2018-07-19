import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import placeholder from './images/placeholder.jpg'

class Book extends Component {

  render() {

    const { book, updateShelf } = this.props

    return (
      <li>
        <div className='book-item'>
          <div className=''>
            {book.imageLinks ? (
              <img style={{width: 128, height: 193}} src={book.imageLinks.smallThumbnail} alt={book.title}/>
            ) : ( 
              <img src={placeholder} alt={book.title}/> 
            )}
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