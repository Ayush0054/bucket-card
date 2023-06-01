import axios from "axios";
import { CREATE_CARD, DELETE_CARD, GET_CARD } from "../constant/constant";
const apiurl = "http://localhost:8000/cards";
export const getCards = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:8000/cards");
  if (!Array.isArray(data)) return;
  dispatch({
    type: GET_CARD,
    payload: data,
  });
};

export const createCards = (bucketName, card, name) => async (dispatch) => {
  const { data } = await axios.post("http://localhost:8000/cards", {
    bucketName,
    card,
    name,
  });
  console.log(data);
  dispatch({
    type: CREATE_CARD,
    payload: data,
  });
};

export const deleteCards = (id) => async (dispatch) => {
  const { data } = await axios.delete(`${apiurl}/${id}`);
  console.log(data);
  dispatch({
    type: DELETE_CARD,
    payload: id,
  });
};
