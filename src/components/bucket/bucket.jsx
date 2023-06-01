import React from "react";
import "./bucket.css";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBuckets } from "../../redux/action/bucketActions";
function Bucket() {
  const dispatch = useDispatch();
  const { buckets } = useSelector((state) => state.bucketsData);
  const deletebucket = (id) => {
    dispatch(deleteBuckets(id));
    // console.log(id);
  };

  return (
    <div className="main">
      {buckets && (
        <div className="bucket">
          {buckets.map((bucket) => {
            //  console.log(bucket);
            return (
              <div className="bucket-options" key={bucket.id}>
                <a onClick={""}>{bucket.name}</a>
                <Link to="/createcard">
                  <button className="sidebar-button">create card</button>
                </Link>
                <button
                  className="sidebar-button"
                  onClick={() => deletebucket(bucket.id)}
                >
                  delete bucket
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Bucket;
