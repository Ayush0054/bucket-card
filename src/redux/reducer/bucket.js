import {
  CREATE_BUCKET,
  DELETE_BUCKET,
  GET_BUCKET,
  RENAME_BUCKET,
} from "../constant/constant";

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
      return [...state, action.payload];
    case DELETE_BUCKET:
      return state.filter((bucket) => bucket.id !== action.payload);
    case RENAME_BUCKET:
      return state.map((bucket) =>
        bucket.id === action.payload.bucketId
          ? { ...bucket, name: action.payload.name }
          : bucket
      );
    default:
      return state;
  }
};

export default bucketsReducer;
