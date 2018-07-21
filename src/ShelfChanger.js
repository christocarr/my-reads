import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired
  }

  render() {

    const { book, updateShelf } = this.props

    return (
      <div className='shelf-changer'>
        <select 
          value={this.props.shelf}
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