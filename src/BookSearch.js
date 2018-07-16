import React, { Component } from 'react'

class BookSearch extends Component {

  render() {
    return (
      <div>
        <form>
         <input 
          type='text'
          placeholder='search for a book'
         />
        </form>
      </div>
    )
  }
}

export default BookSearch