import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        PAGE NOT FOUND
        <p> <Link to="/users">Go to Home</Link> </p>
      </div>
    )
  }
}
