import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description }=this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://c.ndtvimg.com/2023-06/9eust2bo_r_625x300_10_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
