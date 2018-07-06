import React, { Component } from 'react'

class Books extends Component {

  render() {
    return (
      <div>
        <ul className='book-list'>
         {this.props.books.map( (book) => (
          <li className='book-item' key={book.id}>
            <div>
              <img src={book.previewLink} alt=' ' />
              <p>{book.title}</p>
              <p>{book.author}</p>
              <button onClick={() => this.props.onDeleteBook(book)}>
                Edit
              </button>
            </div>
          </li>
         ))}
        </ul>
      </div>
    )
  }
}

export default Books