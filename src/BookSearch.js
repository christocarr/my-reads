import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookSearch extends Component {

  render() {
    return (
      <div className='book-search'>
        <Link to='/' className='back-arrow'></Link>
        <form className='search-form'>
          <input className='search-input'
            type='text'
            placeholder='search for a book'
          />
        </form>
      </div>
    )
  }
}

export default BookSearch