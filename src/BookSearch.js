import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookSearch extends Component {

  render() {
    return (
      <div>
        <form className='search-form'>
          <Link to='/' className='back-arrow'></Link>
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