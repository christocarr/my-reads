import React, { Component } from 'react'

class ShelfChanger extends Component {

  render() {
    return (
      <div className='custom-select'>
        <select value={this.props.shelf}>
          <option value='move' disabled>move to...</option>
          <option value='currentlyReading' >Currently Reading</option>
          <option value='wantToRead' >Want to Read</option>
          <option value='read' >Read</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger