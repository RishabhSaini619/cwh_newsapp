import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container mx-2 my-2">
        <h2>Top Headlines</h2>
        <div className="row mx-2 my-2">
          <div className="col-md-4">
            <NewsItem title="my title" description="desc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title2" description="des2c" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title3" description="d3esc" />
          </div>
        </div>
        </div>
    );
  }
}

export default News;
