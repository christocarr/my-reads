import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BookAPI from './BookAPI'
import Book from './Book';

class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchedBooks: [],
    err: false
  }

  searchBooks = (e) => {
    const query = e.target.value
    this.setState({query})
    if (query) {
      BookAPI.search(query).then((res) => {
        res.length > 0 ? this.setState({searchedBooks: res}) : this.setState({searchedBooks:[], err: true})
      })
    } else {
      this.setState({searchedBooks: [], err: false 
      })
    }
  }

  render() {
    const { books, updateShelf } = this.props
  
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
        <div>
          <ul className='book-list'>
            {this.state.searchedBooks.map((book) => (
              <Book 
                books={books}
                book={book}
                updateShelf={updateShelf}
                key={book.id}
              />
            ))}
          </ul>
        </div>
        { this.state.err === true && (
          <div className='search-error'>
            <h4>No Books Found</h4>
            <p>Please search again</p>
          </div>
        )}
      </div>
    )
  }
}

export default BookSearch