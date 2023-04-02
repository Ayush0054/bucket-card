import { PLAY_CARD } from "../constant/constant";

const INITIAL_HISTORY_STATE = {
  buckets: [],
};

const historyReducer = (state = INITIAL_HISTORY_STATE, action) => {
  switch (action.type) {
    case PLAY_CARD:
      return [...state, { ...action.payload, playedAt: new Date() }];
    default:
      return state;
  }
};

export default historyReducer;
