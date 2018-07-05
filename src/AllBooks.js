import React, { Component } from 'react'
import * as BookAPI from './BookAPI'

class AllBooks extends Component {
  state = {
    data:[]
  }

  componentDidMount() {
    BookAPI.getAll().then(data => {
      this.setState({ data })
    })
  }
  
  render() {
    return (
      <div>
        <h1>All Books</h1>
        <div>
          {this.state.data}
        </div>
      </div>
    )
  }
}

export default AllBooks