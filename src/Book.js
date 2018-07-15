import React, { Component } from 'react'

class Book extends Component {

  render() {
    return (
      <div className='book-list'>
         {this.props.books.map( (book) => (
          <li className='book-item' key={book.id}>
            <img src={book.imageLinks.smallThumbnail} alt={book.title} />
            
              <select className='custom-select'>
                <option value=''>Currently Reading</option>
                <option value=''>Want to Read</option>
                <option value=''>Read</option>
              </select>
            
          </li>
         ))}
      </div>
    )
  }
}

export default Book