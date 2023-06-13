import React, { Component } from 'react'

export class loadingSpinner extends Component {
  render() {
    return (
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }
}

export default loadingSpinner
