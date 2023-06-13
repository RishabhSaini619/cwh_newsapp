import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsEverything extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      pageNo: 1,
    };
  }

  async componentDidMount() {

    let url = `https://newsapi.org/v2/everything?q=india&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=${this.props.pageSize}&page=${this.state.pageNo}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log(parsedData);
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=india&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=${
      this.props.pageSize
    }&page=${this.state.pageNo - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      pageNo: this.state.pageNo - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    if (
      this.state.pageNo + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=india&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=${
        this.props.pageSize
      }&page=${this.state.pageNo + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        pageNo: this.state.pageNo + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container-center mx-2 my-2">
        <h2 className="text-center">All Articles</h2>
        <div className="row mx-5 my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 60)
                      : "Read More"
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.hindustantimes.com/tech/img/2023/06/11/1600x900/sunspectrum_mpso_960_1686469966200_1686469974791.jpg"
                  }
                  newsUrl={element.url ? element.url : ""}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between mx-2 my-2">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-sm btn-primary"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.pageNo + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-sm btn-primary"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsEverything;
