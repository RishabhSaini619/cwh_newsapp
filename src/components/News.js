import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loadinf: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=42d65406e6d940c7a2d04f236e8ef836";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    console.log(parsedData);
  }

  render() {
    return (
      <div className="container mx-4 my-4">
        <h2>Top Headlines</h2>
        <div className="row mx-5 my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 90)
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
        </div>
      </div>
    );
  }
}

export default News;
