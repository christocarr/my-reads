import React, { Component } from 'react'
import Book from './Book'
 
class BookShelf extends Component {

  state = {
    
  }

  render(props) {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-heading'>{this.props.shelf}</h2>
        <ul>
         <Book books={this.props.books}/>
        </ul>
      </div>
    )
  }
}

export default BookShelf