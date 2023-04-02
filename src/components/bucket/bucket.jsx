import React from "react";
import "./bucket.css";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Bucket() {
  const { buckets } = useSelector((state) => state.bucketsData);
  return (
    <div className="main">
      {buckets && (
        <div className="bucket">
          {buckets.map((bucket) => {
            console.log(bucket);
            return (
              <div className="bucket-options" key={bucket.id}>
                <h3>{bucket.name}</h3>
                <Link to="/createcard">
                  <button className="sidebar-button">create card</button>
                </Link>
                <button className="sidebar-button">delete bucket</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Bucket;
