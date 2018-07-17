import React, { Component } from 'react'
import BookShelf from './BookShelf'
 
class BookShelves extends Component {


  render(props) {
    const { books } = this.props

    const shelves = [
      {
        id: 'currentlyReading', 
        title: 'Currently Reading'
      },
      {
        id: 'wantToRead', 
        title: 'Want to Read'
      },
      {
        id: 'read', title:'Read'
      }
    ]
    
    return (
      <div>
        {shelves.map((shelf, id) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.id)

          return (
            <div key={id}>
              <h2 className='bookshelf-heading'>{shelf.title}</h2>
              <BookShelf 
                books={shelfBooks}
              />
            </div>
          )
        })}
        
      </div>
    )
  }
}

export default BookShelves