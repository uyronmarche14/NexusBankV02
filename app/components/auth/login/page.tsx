"use client";
import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import authData from "@/data/authData/page";
import auth from "@/app/pages/auth/login/page";

export const Login_Registration = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const forminfo_login = authData.formInfo.login;
  const forminfo_register = authData.formInfo.register;
  const forminfo_social = authData.social;
  const [toggle, SetToggle] = useState(false);

  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
    // You can store this in localStorage or handle it according to your needs
    if (e.target.checked) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }
  };

  return (
    <div className="items-center justify-center w-[40%] h-full flex flex-col font-system rounded-6xl shadow-lg shadow-white/20">
      <div className="w-full max-w-xl flex flex-col p-8">
        <div className="w-full flex flex-col space-y-4">
          <h1 className="font-bold text-5xl">Halow, Welcome back! </h1>
          <p className="text-gray-500 text-lg">Please login to your account.</p>

          {authData.loginFields.map((field) => (
            <div key={field.id} className="w-full flex flex-col space-y-4">
              <form className="flex flex-col space-y-2">
                <label className="text-sm font-medium">{field.label}</label>
                <input
                  type="text"
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 "
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </form>
            </div>
          ))}
          <div className="pt-4 h-4 flex flex-row justify-between items-center">
            {" "}
            <div className="inline-flex items-center">
              <label
                className="flex items-center cursor-pointer relative"
                htmlFor="remember-me"
              >
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <HiCheck className="h-3.5 w-3.5" />
                </span>
              </label>
              <label
                className="cursor-pointer ml-2 text-slate-600 text-sm"
                htmlFor="remember-me"
              >
                Remember Me
              </label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="w-full flex flex-col space-y-4 pt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors h-12">
              {forminfo_login.submitButton}
            </button>
            <p className="text-sm text-gray-500">
              {forminfo_login.altText}{" "}
              <a href="#" className="text-blue-500 hover:underline">
                {forminfo_login.altAction}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center py-2">
          <div className="h-px grow my-8 bg-gray-200 border-0 dark:bg-gray-700"></div>
          <p className="mx-4 text-gray-500">or continue with</p>
          <div className="h-px grow my-8 bg-gray-200 border-0 dark:bg-gray-700"></div>
        </div>

        {}
        <div className="flex flex-row space-x-4 items-center justify-center">
          {authData.social.map((social) => (
            <a
              href={social.url}
              key={social.id}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 shadow-sm hover:border-blue-500 hover:shadow-md transition-colors hover:transform hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login_Registration;
