import axios from "axios";
import { authHeader } from "./authHeader.Service"

const Login = async (data) => {
  return await axios
    .post(`${import.meta.env.VITE_BASE_URL}/api/client/staff/auth/signIn`, data)
    .then((response) => {
      

      return response;
    });
};

//forgot password
const forgotPassword = async (data) => {

  return await axios
    .post(`${import.meta.env.VITE_BASE_URL}/api/client/staff/auth/forgetpassword`, data)
    .then((response) => {
      return response;
    });
};

// reset password

const resetPassword = async (data) => {

  return await axios
    .post(`${import.meta.env.VITE_BASE_URL}/api/client/staff/auth/resetpassword`, data)
    .then((response) => {
      return response;
    });
};

const OtpSignIn = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/client/staff/auth/signInByOtp`,
      data
    );
    return response;
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with a status code
      // Show a warning toast with the error message
      return Promise.reject(error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      // Show a warning toast indicating a network issue
      return Promise.reject("Network error. Please try again.");
    } else {
      // Something happened in setting up the request that triggered an Error
      // Show a warning toast with a generic error message
      return Promise.reject("An error occurred. Please try again later.");
    }
  }
};

const getProfile = async (id) => {
  const a = authHeader();
  return await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/superAdmin/getSuperAdminProfile/${id}`,
    {
      headers: authHeader(),
    }
  );
};


// const getOrganiserProfile = async (id) => {
//   const a = authHeader();
//   return await axios.get(
//     `${import.meta.env.VITE_BASE_URL}/api/organiser/getProfile/${id}`,
//     {
//       headers: authHeader(),
//     }
//   );
// };


const updateProfile = async (data) => {
  console.log("data",data);
  
  const headers = authHeader();

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/superAdmin/superAdminProfile`,
      data, // Pass the data as the second parameter
      {
        headers: headers,
      }
    );


    return response.data; // Assuming you want to return the response data
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};

// const logout = () => {
//   localStorage.removeItem("_stl");
//   <Navigate to="/login" />;
// };

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default { Login, OtpSignIn, getProfile,forgotPassword, updateProfile,resetPassword };
