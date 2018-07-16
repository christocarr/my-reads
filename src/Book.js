import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

  render() {
    const { book } = this.props
    console.log(book.shelf)
    return (
      <div className='book-item'>
        <div className=''>
          <img src={book.imageLinks.smallThumbnail} alt={book.title}/>
          <ShelfChanger shelf={book.shelf}/>
        </div>
      </div>
    )
  }
}

export default Book