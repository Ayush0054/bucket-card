import {
  CREATE_BUCKET,
  DELETE_BUCKET,
  RENAME_BUCKET,
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  MOVE_CARD,
  PLAY_CARD,
} from "../actions";

export const bucketReducer = (state = [], action) => {
  switch (action.type) {
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

export const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        [action.payload.bucketId]: [
          ...state[action.payload.bucketId],
          action.payload.card,
        ],
      };
    case DELETE_CARD:
      return {
        ...state,
        [action.payload.bucketId]: state[action.payload.bucketId].filter(
          (card) => card.id !== action.payload.cardId
        ),
      };
    case EDIT_CARD:
      return {
        ...state,
        [action.payload.bucketId]: state[action.payload.bucketId].map((card) =>
          card.id === action.payload.cardId
            ? { ...card, ...action.payload.card }
            : card
        ),
      };
    case MOVE_CARD:
      const { sourceBucketId, destinationBucketId, cardId } = action.payload;
      const card = state[sourceBucketId].find((card) => card.id === cardId);
      return {
        ...state,
        [sourceBucketId]: state[sourceBucketId].filter(
          (card) => card.id !== cardId
        ),
        [destinationBucketId]: [...state[destinationBucketId], card],
      };
    default:
      return state;
  }
};

export const historyReducer = (state = [], action) => {
  switch (action.type) {
    case PLAY_CARD:
      return [...state, { ...action.payload, playedAt: new Date() }];
    default:
      return state;
  }
};
