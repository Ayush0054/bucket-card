import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchCards = async () => {
  const response = await axios.get(`${API_URL}/cards?_expand=bucket`);
  return response.data;
};

export const addCard = async (card) => {
  const response = await axios.post(`${API_URL}/cards`, card);
  return response.data;
};

export const deleteCard = async (cardId) => {
  const response = await axios.delete(`${API_URL}/cards/${cardId}`);
  return response.data;
};

export const updateCard = async (card) => {
  const response = await axios.put(`${API_URL}/cards/${card.id}`, card);
  return response.data;
};

export const moveCard = async (cardId, bucketId) => {
  const response = await axios.patch(`${API_URL}/cards/${cardId}`, {
    bucketId,
  });
  return response.data;
};

export const fetchBuckets = async () => {
  const response = await axios.get(`${API_URL}/buckets`);
  return response.data;
};

export const addBucket = async (bucket) => {
  const response = await axios.post(`${API_URL}/buckets`, bucket);
  return response.data;
};

export const deleteBucket = async (bucketId) => {
  const response = await axios.delete(`${API_URL}/buckets/${bucketId}`);
  return response.data;
};

export const fetchHistory = async () => {
  const response = await axios.get(`${API_URL}/history`);
  return response.data;
};

export const addHistoryItem = async (historyItem) => {
  const response = await axios.post(`${API_URL}/history`, historyItem);
  return response.data;
};
