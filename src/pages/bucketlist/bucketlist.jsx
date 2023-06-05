import React, { useEffect } from "react";
import "./bucketlist.css";
import Bucket from "../../components/bucket/bucket";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import { useDispatch } from "react-redux";
import { getBuckets } from "../../redux/action/bucketActions";
import Navbar from "../../components/navbar/navbar";
function BucketList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBuckets());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bucketlist">
        <div className="sidebar">
          <div className="header-sidebar">
            <h1>all buckets</h1>
            <Link to="/createbucket">
              <button className="create-bucket-btn"> create new bucket</button>
            </Link>
          </div>
          <Bucket />
        </div>
        <Card />
      </div>
    </div>
  );
}

export default BucketList;
