import axios from "axios";

const API_BASE_URL = "http://localhost:5000";


// register a user
export const RegisterUser = async (payload) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/register`,
      payload
    );
    return response.data;
  } catch (error) {
    console.error("RegisterUser Error:", error);
    throw error;
  }
};

// Login user
export const LoginUser = async (payload) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/login`,
      payload
    );
    return response.data;
  } catch (error) {
    console.error("LoginUser Error:", error);
    throw error;
  }
};

//get loggedin user details
export const GetLoggedInUserDetails = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/users/getLoggedInUserDetails`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("GetLoggedInUser Error:", error);
    throw error;
  }
};
//get all users
export const GetAllUsers = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/users/get-all-users/`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("GettingUsers Error:", error);
    throw error;
  }
};
// Update a user
export const EditUser = async (id, payload) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/users/update-user/${id}`,
      payload,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("EditUser Error:", error);
    throw error;
  }
};

//delete user

export const DeleteUser = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/users/delete-user/${id}`,     
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("DeleteUser Error:", error);
    throw error;
  }
};