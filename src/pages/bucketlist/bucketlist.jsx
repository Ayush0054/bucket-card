import React, { useEffect } from "react";
import "./bucketlist.css";
import Bucket from "../../components/bucket/bucket";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import { useDispatch } from "react-redux";
import { getBuckets } from "../../redux/action/bucketActions";
function BucketList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBuckets());
  }, []);
  return (
    <div className="bucketlist">
      <div className="sidebar">
        <div className="header-sidebar">
          <h1>all buckets</h1>
          <Link to="/createbucket">
            <button> create new bucket</button>
          </Link>
        </div>
        <Bucket />
      </div>
      <Card />
    </div>
  );
}

export default BucketList;
