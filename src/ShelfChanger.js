import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, updateShelf } = this.props

    //set searched books default select option to none
    let shelf = 'none'

    //if shelved book is in search then set select option to current shelf
    for(let i of books) {
      if(i.id === book.id) {
        shelf = i.shelf
        break
      }
    }

    return (
      <div className='shelf-changer'>
        <select 
          defaultValue={shelf}
          onChange={(e) => updateShelf(book, e.target.value)}>
          <option value='move' disabled>move to...</option>
          <option value='currentlyReading' >Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger