import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BookAPI from './BookAPI'
import Book from './Book';

class BookSearch extends Component {

  state = {
    query: '',
    books: [],
    err: false
  }

  searchBooks = (e) => {
    const query = e.target.value.trim()
    this.setState({query})
    if (query) {
      BookAPI.search(query).then((res) => {
        res.length > 0 ? this.setState({books: res}) : this.setState({books:[], err: true})
      })
    }  
  }

  

  render() {
    const updateShelf = this.props
    return (
      <div>
        <div className='book-search'>
          <Link to='/' className='back-arrow'></Link>
          <form className='search-form'>
            <input className='search-input'
              type='text'
              placeholder='search for a title or author'
              value={this.state.query}
              onChange={this.searchBooks}
            />
          </form>         
        </div>
        <div className='book-list'>
          <ul>
            {this.state.books.map((book) => (
              <Book 
                book={book}
                updateShelf={updateShelf}
                key={book.id}
                bookImage={this.state.bookImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BookSearch