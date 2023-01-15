import React from "react";
import PostButton from "../components/PostButton/PostButton";
import { Link } from "react-router-dom";
import SearchButton from "../components/SearchButton";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          

          <PostButton />

          <a className="navbar-brand" href="/" style={{ marginLeft: "0px" }}>
            DIALOGUE ALLEY
          </a>

          <SearchButton/>

          {/* <Link className="btn btn-outline-light" to="/SearchHandle">Search Handle</Link>
          <Link className="btn btn-outline-light" to="/SearchHashtag">Search Hashtag</Link> */}

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
}
