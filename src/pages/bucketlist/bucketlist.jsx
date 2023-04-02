import React from "react";
import "./bucketlist.css";
import Bucket from "../../components/bucket/bucket";
import { Link } from "react-router-dom";
function BucketList() {
  return (
    <div className="bucketlist">
      <div className="sidebar">
        <div className="header-sidebar">
          <h1>all buckets</h1>
          <Link to="/createbucket">
            <button> create new bucket</button>
          </Link>
        </div>
        <div className="bucket-options">
          <h3>Bucket 1</h3>
          <Link to="/createcard">
            <button className="sidebar-button">create card</button>
          </Link>
          <button className="sidebar-button">delete bucket</button>
        </div>
      </div>
      <Bucket />
    </div>
  );
}

export default BucketList;
