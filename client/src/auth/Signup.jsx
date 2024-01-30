import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profileImg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );

      console.log(res.data.message);

      console.log("Form submitted:", formData);

      setFormData({
        username: "",
        email: "",
        password: "",
        profileImg: "",
      });
    } catch (error) {
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
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

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

          <div className="mb-4">
            <label
              htmlFor="profileImg"
              className="block text-sm font-medium text-gray-600"
            >
              Profile Image Upload
            </label>
            <input
              type="file"
              accept="image/*"
              id="profileImg"
              name="profileImg"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              id="bg_button"
              className="text-white py-2 px-4 rounded-md"
            >
              Sign Up
            </button>
            <OAuth />
          </div>
        </form>
        <p className="text-sm mt-3">
          Have an account?{" "}
          <Link className="text-blue-600" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
