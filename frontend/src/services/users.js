import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllUsers(accessToken) {
  try {
    const request = await axios.get(`${API_URL}/users`, {
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

export async function getUserById(id, accessToken) {
  if(id){
    try {
      const request = await axios.get(`${API_URL}/user/${id}`, {
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
}

export async function changeUserActive(userId, data, accessToken) {
  if(data && userId){
    try {
      const request = await axios.put(`${API_URL}/user/${userId}`, data, {
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
}

export async function createUser(data, accessToken) {
  if(data){
    try {
      const request = await axios.post(`${API_URL}/user`, data, {
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
}

export async function updateUser(data, id, accessToken) {
  if(data){
    try {
      const request = await axios.put(`${API_URL}/user/${id}`, data, {
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
}

export async function deleteUserById(id, accessToken) {
  try {
    const request = await axios.delete(`${API_URL}/user/${id}`, {
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