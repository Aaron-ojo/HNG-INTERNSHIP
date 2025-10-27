import React from "react";
import { useState } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const Login = () => {
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!formData.Email) {
      newErrors.Email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Email is invalid";
    }

    if (!formData.Password) {
      newErrors.Password = "Password is Required";
    } else if (formData.Password.length < 6) {
      newErrors.Password = "Password is too short";
    }
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      if (
        formData.Email === "test@example.com" &&
        formData.Password === "password"
      ) {
        localStorage.setItem("ticketapp_session", "mock-jwt-token-12345");
        window.location.href = "/dashboard";
      } else {
        setErrors({ general: "Invalid email or password" });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login to TicketFlow
          </h2>

          <form action="" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="">Email: </label>
              <input
                type="email"
                name="email"
                id="password"
                value={formData.Email}
                onChange={(e) =>
                  setFormData({ ...formData, Email: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Email"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.Password}
                onChange={(e) =>
                  setFormData({ ...formData, Password: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
              {errors.Password && (
                <p className="text-red-500 text-sm mt-1">{errors.Password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
