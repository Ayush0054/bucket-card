import axios from "axios";
import { GET_BUCKET } from "../constant/constant";
export const getBuckets = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:8000/buckets");

  if (!Array.isArray(data)) return;

  dispatch({
    type: GET_BUCKET,
    payload: data,
  });
};
