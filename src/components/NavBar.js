import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary background-color: #e3f2fd">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Flam Flash
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    target="_blank"
                    href="https://newsapi.org/v2/top-headlines?country=in&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Top Headlines
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/everything?q=india&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    All Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/sources?category=business&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/sources?category=entertainment&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/sources?category=general&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Generals
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/sources?category=health&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/sources?category=science&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/sources?category=sports&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    target="_blank"
                    href="https://newsapi.org/v2/sources?category=technology&apiKey=42d65406e6d940c7a2d04f236e8ef836&pageSize=30&page=1"
                  >
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
