import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInUserInfo,
  signInFailure,
  signInUserTotalContactsData,
} from "../redux/user/userSlice";

import { useDispatch } from "react-redux";
import OAuth from "./OAuth";
// import { io } from "socket.io-client";

const Signin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // dispatch(signInStart());
      const res = await axios.post(
        "http://localhost:8000/api/auth/signin",
        formData
      );

      // console.log(res.data);

      dispatch(signInUserInfo(res.data));

      console.log(res.data);

      const userEmail = {
        email: res.data.email,
      };

      const re_res = await axios.post(
        "http://localhost:8000/api/chat/fetch/messages",
        userEmail
      );

      dispatch(signInUserTotalContactsData(re_res.data));

      console.log(re_res.data);

      setFormData({
        email: "",
        password: "",
      });

      navigate("/web.whatsapp.com");
    } catch (error) {
      dispatch(signInFailure(error));
      if (error.response) {
        console.error(
          "Server responded with error status:",
          error.response.status
        );
        console.error(
          "Error message from server:",
          error.response.data.message
        );
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="bg-whatsapp-gradient h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              id="bg_button"
              className="text-white py-2 px-4 rounded-md"
            >
              Sign In
            </button>
            <OAuth />
          </div>
        </form>
        <p className="text-sm mt-3">
          Don't have an account?{" "}
          <Link className="text-blue-600" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
