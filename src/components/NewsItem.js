import React, { Component } from "react";

export class NewsItem extends Component {
  articles= [
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": "Press Trust of India",
      "title": "\"Cheat, Cheat, Cheat\": Australian Cricketers Booed After Shubman Gill's Dismissal In WTC Final - NDTV Sports",
      "description": "The dismissal of Shubman Gill and the controversy surrounding it resulted in the fans at the Oval booing Australian cricketers.",
      "url": "https://sports.ndtv.com/cricket/cheat-cheat-cheat-australian-cricketers-booed-after-shubman-gills-dismissal-in-wtc-final-4110952",
      "urlToImage": "https://c.ndtvimg.com/2023-06/9eust2bo_r_625x300_10_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2023-06-11T05:58:16Z",
      "content": "The Oval Indian supporters, on Saturday, resorted to booing the Australian team, primarily Cameron Green after the giant all-rounder's diving catch to dismiss opener Shubman Gill looked inconclusive … [+2142 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles : this.articles,
      loadinf: false
    }
  }
  render() {
    let { title, description, imageUrl, newsUrl }=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
