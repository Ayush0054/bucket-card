import axios from "axios";
import { CREATE_BUCKET, DELETE_BUCKET, GET_BUCKET } from "../constant/constant";
const apiurl = "http://localhost:8000/buckets";
export const getBuckets = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:8000/buckets");
  if (!Array.isArray(data)) return;

  dispatch({
    type: GET_BUCKET,
    payload: data,
  });
};

export const createBuckets = (name) => async (dispatch) => {
  const { data } = await axios.post("http://localhost:8000/buckets", {
    name,
  });

  dispatch({
    type: CREATE_BUCKET,
    payload: data,
  });
};

export const deleteBuckets = (id) => async (dispatch) => {
  const { data } = await axios.delete(`${apiurl}/${id}`);
  console.log(data);
  dispatch({
    type: DELETE_BUCKET,
    payload: id,
  });
};
