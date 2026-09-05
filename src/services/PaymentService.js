import axios from "axios";

const API = "https://flight-backend-system.onrender.com/api/payments";

export const createPayment = async (data, token) => {
  return axios.post(
    `${API}/create`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createOrder = async (amount, token) => {
  return axios.post(
    `${API}/create-order`,
    { amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const verifySignature = async (data, token) => {
  return axios.post(
    `${API}/verify-signature`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};