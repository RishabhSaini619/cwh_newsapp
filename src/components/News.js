import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container mx-2 my-2">
        <h2>Top Headlines</h2>
        <div className="row mx-2 my-2">
          <div className="col-md-4">
            <NewsItem title="my title" description="desc" imageUrl="https://c.ndtvimg.com/2023-06/9eust2bo_r_625x300_10_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675" />
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
