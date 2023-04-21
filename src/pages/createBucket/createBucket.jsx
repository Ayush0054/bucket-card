import React, { useState } from "react";
import { createBuckets } from "../../redux/action/bucketActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateBucket() {
  // const { buckets } = useSelector((state) => state.bucketsData);
  const [bucket, setBucket] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setBucket({ ...bucket, [name]: value });
  // };
  const createbucket = (e) => {
    e.preventDefault();
    dispatch(createBuckets(bucket));
    console.log(bucket);
    setBucket("");
    navigate("/");
  };
  return (
    <div>
      <h3>create Bucket: </h3>
      <form action="/" onSubmit={createbucket}>
        <input
          type="text"
          value={bucket}
          // onChange={handleInputChange}
          onChange={(e) => setBucket(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default CreateBucket;
