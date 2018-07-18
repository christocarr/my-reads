import React, { Component } from 'react'

class BookSearch extends Component {

  render() {
    return (
      <div>
        <form className='search-from'>
          <div className='back-arrow'></div>
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