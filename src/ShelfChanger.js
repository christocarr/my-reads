import React, { Component } from 'react'

class ShelfChanger extends Component {

  render() {

    const { book, updateShelf } = this.props

    return (
      <div className='custom-select'>
        <select value={this.props.shelf}
          onChange={(e) => updateShelf(book, e.target.value)}>
          <option value='move' disabled>move to...</option>
          <option value='currentlyReading' >Currently Reading</option>
          <option value='wantToRead' >Want to Read</option>
          <option value='read' >Read</option>
          <option value='read' >None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger