import React, { Component } from 'react'

class BookSearch extends Component {

  render() {
    return (
      <div>
        <form className='search-form'>
          <button className='back-arrow'></button>
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