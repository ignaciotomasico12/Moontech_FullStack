import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllLogs(accessToken) {
  try {
    const request = await axios.get(`${API_URL}/logs`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    return request;
  } catch (error) {
    console.error(error);
    return error
  }
}

export async function deleteLogById(id, accessToken) {
  try {
    const request = await axios.delete(`${API_URL}/log/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    return request;
  } catch (error) {
    console.error(error);
    return error
  }
}