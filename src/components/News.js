import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Divya",
      title:
        "Smartphones under 50000 with great cameras: Google Pixel 7, Galaxy S22 Plus and more - HT Tech",
      description:
        "Looking for a smartphone under Rs. 50000? Here are some options with great cameras and performance. From Google Pixel 7 to Galaxy S22 Plus, check out top 5 here.",
      url: "https://tech.hindustantimes.com/mobile/news/smartphones-under-50000-with-great-cameras-google-pixel-7-galaxy-s22-plus-and-more-71686478501177.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/06/11/1600x900/smartphones_under_50k_1686478905447_1686478912512.jpg",
      publishedAt: "2023-06-11T10:23:12Z",
      content:
        "There is a wide range of options available in the smartphone market for you to choose from. While selecting the perfect smartphone within a budget of Rs. 50000, it is important to take into account c… [+3457 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "WTC Final: ICC's Tweet On Shubman Gill's Controversial Dismissal Leaves Internet Fuming - NDTV Sports",
      description:
        "The ICC's tweet on Shubman Gill's controversial dismissal during the WTC Final did not go down well with the fans.",
      url: "https://sports.ndtv.com/cricket/wtc-final-iccs-tweet-on-shubman-gills-controversial-dismissal-leaves-internet-fuming-4112106",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/fqc6mlp_e_625x300_11_June_23.jpg",
      publishedAt: "2023-06-11T10:04:00Z",
      content:
        "The dismissal of Shubman Gill on Day 4 of the World Test Championship (WTC) Final between India and Australia has been the subject of multiple debates. Gill was caught in the slips by Cameron Green o… [+2005 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Aman Gupta",
      title:
        "Jaguar will evolve into all-electric luxury brand says Chandrasekaran | Mint - Mint",
      description:
        "Jaguar Land Rover plans to become an all-electric luxury brand, with the first new electric cars set to arrive in 2025. JLR will start making pure-electric versions of popular models, with the pure-electric Range Rover set to be available for pre-order later …",
      url: "https://www.livemint.com/companies/news/jaguar-will-evolve-into-all-electric-brand-by-2025-says-chandrasekaran-11686467801513.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/06/11/600x338/BRITAIN-BATTERY-PLANT-TATA-0_1686470084562_1686470141240.JPG",
      publishedAt: "2023-06-11T08:36:57Z",
      content:
        "Jaguar Land Rover Chairman N Chandrasekaran has said that the company is on track to transform itself into an all-electric luxury brand and the first new cars will arrive in 2025. JLR was acquired by… [+1938 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Give Us Pics, Video To Support #MeToo Allegations: Cops To Wrestlers - NDTV",
      description:
        "The Delhi Police has asked the women wrestlers who filed a sexual harassment case against Wrestling Federation of India chief and BJP MP Brij Bhushan Sharan ...",
      url: "https://www.youtube.com/watch?v=wrYcEGC7GPI",
      urlToImage: "https://i.ytimg.com/vi/wrYcEGC7GPI/maxresdefault.jpg",
      publishedAt: "2023-06-11T08:33:36Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Correspondent",
      title:
        "Canada staying deportation of Indian students a welcome step - Hindustan Times",
      description:
        "Indian authorities in New Delhi and Ottawa had taken up the matter of the Indian students with their Canadian counterparts in recent days | Latest News India",
      url: "https://www.hindustantimes.com/india-news/canada-staying-deportation-of-indian-students-a-welcome-step-101686464918807.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/06/11/1600x900/Canadian-authorities-were-repeatedly-urged-to-be-f_1686464910451.jpg",
      publishedAt: "2023-06-11T08:29:07Z",
      content:
        "Steps taken by Canadian authorities to stay the deportation of some Indian students who allegedly submitted fraudulent admission letters to educational institutes are a welcome development, people fa… [+2773 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Say goodbye to slowdowns! These 3 iPhone hacks will boost speed to next level - HT Tech",
      description:
        "If you want to boost the speed of your old iPhone, then these 3 hacks are a must.",
      url: "https://tech.hindustantimes.com/how-to/say-goodbye-to-slowdowns-these-3-iphone-hacks-will-boost-speed-to-next-level-71686471481986.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/06/11/1600x900/pexels-kenejd-spahiu-10914594_1686471684154_1686471697083.jpg",
      publishedAt: "2023-06-11T08:22:33Z",
      content:
        "Has your iPhone been hit by a slowdown and you are finding it increasingly frustrating to use it for even basic purposes? If you're dissatisfied with its speed and wish to improve it, don't fret! The… [+2209 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "IND vs AUS Live Score, WTC Final: Eyes on Kohli-Rahane as India eye history - Hindustan Times",
      description:
        "India vs Australia Live Score, WTC 2023 Final Day 5: Virat Kohli will be the key batter for India as team chases history at The Oval",
      url: "https://www.hindustantimes.com/cricket/ind-vs-aus-live-score-wtc-2023-final-day-5-india-vs-australia-world-test-championship-2023-final-match-latest-scorecard-101686460221916.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/06/11/1600x900/CRICKET-TEST-IND-AUS--62_1686460279542_1686460690705.JPG",
      publishedAt: "2023-06-11T08:15:41Z",
      content:
        "Day 4 of the WTC final also saw a major controversy involving Shubman Gill.\r\nThe incident took place when Gill poked a ball outside off by Scott Boland and got an edge in the process, which was then … [+548 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Cyclone Biparjoy Turns Into "Extremely Severe Cyclonic Storm": 10 Points - NDTV',
      description:
        'The weather office today said that cyclone Biparjoy has intensified into an "extremely severe cyclonic storm". According to forecasting agencies, the storm has been undergoing "rapid intensification".',
      url: "https://www.ndtv.com/india-news/cyclone-biparjoy-turns-into-extremely-severe-cyclonic-storm-10-points-4111622",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/r5qprvbg_-biparjoy_625x300_11_June_23.jpg",
      publishedAt: "2023-06-11T08:09:00Z",
      content:
        "<li>Cyclone Biparjoy is very likely to move nearly northwards and cross Saurashtra and Kutch and adjoining Pakistan coasts on June 15, the India Meteorological Department (IMD) said.\r\n</li><li>Gujara… [+1641 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Similar ordinances will be brought for other states too: Arvind Kejriwal attacks PM Modi at AAP's maha ra - Times of India",
      description:
        "Punjab CM Bhagwant Mann, AAP minister and a large number of party workers were present for the 'maha rally' at Ramlila Maidan ground in the national c",
      url: "https://timesofindia.indiatimes.com/city/delhi/at-aaps-maha-rally-against-centres-ordinance-on-control-of-services-arvind-kejriwal-attacks-pm-modi-says-similar-ordinances-will-be-brought-for-other-states-too/articleshow/100913210.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-100913315,width-1070,height-580,imgsize-1719139,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-06-11T08:09:00Z",
      content:
        "Rahul Gandhi slams BJP, RSS for dwelling in the past, blaming others",
    },
    {
      source: {
        id: null,
        name: "Gulte",
      },
      author: "Satya B",
      title: "Shreyas To Donate 100 Tickets To Each Ramalayam - Gulte",
      description:
        "One of the top film promotions and publicity planning agencies in Indian cinema, Shreyas media took a good initiative proving their devotion towards lord Rama. On Sunday, they announced that they would be donating 100 tickets and also 1 extra ticket (for Hanu…",
      url: "https://www.gulte.com/movienews/245350/shreyas-to-donate-100-tickets-to-each-ramalayam",
      urlToImage:
        "https://cdn.gulte.com/wp-content/uploads/2023/06/adipurush-8.jpg",
      publishedAt: "2023-06-11T08:01:48Z",
      content:
        "One of the top film promotions and publicity planning agencies in Indian cinema, Shreyas media took a good initiative proving their devotion towards lord Rama.\r\nOn Sunday, they announced that they wo… [+650 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "NASA Astronomy Picture of the Day 11 June 2023: What is the TRUE colour of the Sun? - HT Tech",
      description:
        "Today’s NASA Astronomy Picture of the Day shows the wide-colour spectrum of the Sun.",
      url: "https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-11-june-2023-what-is-the-true-colour-of-the-sun-71686469893592.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/06/11/1600x900/sunspectrum_mpso_960_1686469966200_1686469974791.jpg",
      publishedAt: "2023-06-11T07:53:29Z",
      content:
        "What Color is the Sun? The answer to this question seems obvious -- yellow. That's what we see on a daily basis, right? But you would be surprised to know, that the true colour of the Sun is not abso… [+1971 chars]",
    },
    {
      source: {
        id: null,
        name: "Deccan Herald",
      },
      author: "DHNS",
      title:
        "Karnataka govt launches 'Shakti' scheme offering free bus ride for women - Deccan Herald",
      description:
        "The Congress-led Karnataka government on Sunday launched one of their five poll guarantees, the ‘Shakti' scheme, which offers free travel to women in government buses in the state. Karnataka Chief Minister Siddaramaiah, his Deputy D K Shivakumar, and Transpor…",
      url: "https://www.deccanherald.com/state/top-karnataka-stories/karnataka-govt-launches-shakti-scheme-offering-free-bus-ride-for-women-1226783.html",
      urlToImage:
        "https://www.deccanherald.com/sites/dh/files/articleimages/2023/06/11/free-bus-1226783-1686472792.jpg",
      publishedAt: "2023-06-11T07:39:38Z",
      content:
        "The Congress-led Karnataka government on Sunday launched one of their five poll guarantees, the Shakti' scheme, which offers free travel to women in government buses in the state.\r\nKarnataka Chief Mi… [+1315 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Harman Baweja Is Out To Silence All "Critic Roshans". Watch ROFL Video - NDTV Movies',
      description:
        "Harman Baweja made his acting comeback with the web series Scoop",
      url: "https://www.ndtv.com/entertainment/harman-baweja-wins-hearts-in-hilarious-new-video-about-critic-roshans-4111715",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/idmvn5sg_harman-_625x300_11_June_23.jpg",
      publishedAt: "2023-06-11T07:38:21Z",
      content:
        "Still from a video shared by Netflix. (courtesy: netflix_in)\r\nHarman Baweja is back and this time, it looks like he is here to stay. The actor who made his debut in 2008 with the Priyanka Chopra film… [+2249 chars]",
    },
  
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: "South Africa's Johannesburg Hit By Powerful Earthquake - NDTV",
      description:
        "A 5.0-magnitude earthquake on Sunday struck near Johannesburg, shaking buildings across South Africa's most populous province, the Unites States Geological Survey reported.",
      url: "https://www.ndtv.com/world-news/south-africas-johannesburg-hit-by-powerful-earthquake-4111821",
      urlToImage:
        "https://i.ndtvimg.com/i/2017-09/earthquake-generic_650x400_71505899871.jpg",
      publishedAt: "2023-06-11T07:19:03Z",
      content:
        "Buildings shook across the province of Gauteng.\r\nJohannesburg: A 5.0-magnitude earthquake on Sunday struck near Johannesburg, shaking buildings across South Africa's most populous province, the Unite… [+728 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBCTV18",
      },
      author: "PTI",
      title:
        "India's power demand reaches all-time high of 223.23 GW on June 9 - CNBCTV18",
      description:
        "The power ministry had estimated that the peak power demand will easily touch 229 GW during this summer in April only.",
      url: "https://www.cnbctv18.com/india/india-power-demand-reaches-all-time-high-of-22323-gw-on-june-9-16903321.htm",
      urlToImage:
        "https://images.cnbctv18.com/wp-content/uploads/2019/11/power-electricity.jpg",
      publishedAt: "2023-06-11T06:43:24Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "etimes.in",
      title:
        "Animal pre-teaser: Ranbir Kapoor goes on a rampage, looks menacing in the Sandeep Reddy Vanga directorial - Indiatimes.com",
      description:
        "Ranbir Kapoor starrer Animal released its pre-teaser earlier today. The movie, co-starring Rashmika Mandanna shows Ranbir in a menacing avatar as he g",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/animal-pre-teaser-ranbir-kapoor-goes-on-a-rampage-looks-menacing-in-the-sandeep-reddy-vanga-directorial/articleshow/100911944.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-100911905,width-1070,height-580,imgsize-40636,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-06-11T06:42:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "Shilpa Nair",
      title:
        "Army jawan alleges wife ‘stripped half-naked, beaten by 120 men’ in Tamil Nadu; police refutes - India Today",
      description:
        'An Army jawan, posted in Kashmir, alleged that his wife was “stripped half-naked and brutally beaten” by a group of people in Tamil Nadu. However, police stated that the jawan’s claims were "exaggerated".',
      url: "https://www.indiatoday.in/india/story/army-jawan-wife-stripped-half-naked-beaten-120-men-tamil-nadu-police-2391535-2023-06-11",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/58_1-sixteen_nine.jpg?VersionId=33R9sQ0DIXhgZPu6ghiOP873uBJc7fBi",
      publishedAt: "2023-06-11T06:22:43Z",
      content:
        "By Shilpa Nair, Pramod Madhav: An Army jawan alleged that his wife was “stripped half-naked and brutally beaten” by a group of people in Thiruvannamalai district of Tamil Nadu.\r\nA video, posted by a … [+2996 chars]",
    },
    {
      source: {
        id: null,
        name: "Abplive.com",
      },
      author: "ABP News Bureau",
      title:
        "Sachin Pilot Likely To Be CM If Congress Wins Polls In Rajasthan, Here's What Party Told Gehlot - ABP Live",
      description:
        "Latest News Headlines, Top 10 News Today, Breaking News from India and World on ABP LIVE. Watch Latest Photos, Videos from Bollywood, Election News Updates and ABP News LIVE TV here.",
      url: "https://news.abplive.com/elections/sachin-pilot-will-be-cm-if-congress-wins-polls-in-rajasthan-say-party-sources-1608305",
      urlToImage: "?impolicy=abp_cdn&imwidth=1200&imheight=628",
      publishedAt: "2023-06-11T05:50:56Z",
      content:
        "Share Photos, Videos: Delhi Police Asks Wrestlers For Proof In Case Against WFI Chief, Says Report",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Manchester City complete rare treble in football - Indiatimes.com",
      description:
        "Football News: Be it any sport, the greatness of a team is always known by the trophies or titles it wins. And when it comes to the most popular sport in the world,",
      url: "https://timesofindia.indiatimes.com/sports/football/champions-league/manchester-city-complete-rare-treble-in-football/articleshow/100911137.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-100911094,width-1070,height-580,imgsize-141542,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-06-11T05:47:00Z",
      content: "WTC Final: Kohli, Rahane hold firm against Australia",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loadinf: false,
    };
  }
  render() {
    return (
      <div className="container mx-2 my-2">
        <h2>Top Headlines</h2>
        <div className="row mx-2 my-2">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 90)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
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
