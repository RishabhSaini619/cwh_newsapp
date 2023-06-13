import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsPanel extends Component {

  render() {
    return (
      <div>
        <NewsTopHeadlines pageSize={6}/>
        <NewsEverything pageSize={20}/>
      </div>
    )
  }
}

export default NewsPanel
