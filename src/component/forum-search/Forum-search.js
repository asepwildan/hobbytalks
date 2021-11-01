import React from "react";
import noForumSearch from "../../component/forum-search/img/no-thread-found.png";
import "./style/Forum-search.scss";

export default function ForumSearch() {
  return (
    <div className="container">
      <div className="no-thread">
        <img className="notfound" src={noForumSearch}></img>
        <p className="text">No Thread Found</p>
      </div>
    </div>
  );
}
