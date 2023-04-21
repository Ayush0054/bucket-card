import { CREATE_BUCKET, DELETE_BUCKET, GET_BUCKET } from "../constant/constant";

const INITIAL_BUCKETS_STATE = {
  buckets: [],
};

const bucketsReducer = (state = INITIAL_BUCKETS_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BUCKET:
      return {
        ...state,
        buckets: payload,
      };
    case CREATE_BUCKET:
      return { ...state, buckets: [...state.buckets, payload] };
    case DELETE_BUCKET:
      return {
        ...state,
        buckets: state.buckets.filter((bucket) => bucket.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bucketsReducer;
