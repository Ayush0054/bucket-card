import {
  CREATE_BUCKET,
  CREATE_CARD,
  DELETE_BUCKET,
  DELETE_CARD,
  EDIT_CARD,
  MOVE_CARD,
  PLAY_CARD,
  RENAME_BUCKET,
} from "../constant/constant";

export const createBucket = (bucket) => ({
  type: CREATE_BUCKET,
  payload: bucket,
});

export const deleteBucket = (bucketId) => ({
  type: DELETE_BUCKET,
  payload: bucketId,
});

export const renameBucket = (bucketId, name) => ({
  type: RENAME_BUCKET,
  payload: { bucketId, name },
});

export const createCard = (bucketId, card) => ({
  type: CREATE_CARD,
  payload: { bucketId, card },
});

export const deleteCard = (bucketId, cardId) => ({
  type: DELETE_CARD,
  payload: { bucketId, cardId },
});

export const editCard = (bucketId, cardId, card) => ({
  type: EDIT_CARD,
  payload: { bucketId, cardId, card },
});

export const moveCard = (sourceBucketId, destinationBucketId, cardId) => ({
  type: MOVE_CARD,
  payload: { sourceBucketId, destinationBucketId, cardId },
});

export const playCard = (card) => ({
  type: PLAY_CARD,
  payload: card,
});
