import React, { JSX } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaBuilding,
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

interface FormField {
  id: number;
  name: string;
  label: string;
  type: "text" | "email" | "password" | "tel";
  placeholder: string;
  icon: JSX.Element;
  required?: boolean;
}

interface AuthForm {
  title: string;
  fields: FormField[];
  submitButton: string;
  altText: string;
  altAction: string;
}

const authData = {
  loginFields: [
    {
      id: 1,
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
      icon: <MdAlternateEmail className="w-5 h-5 text-gray-500" />,
      required: true,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      icon: <FaLock className="w-5 h-5 text-gray-500" />,
      required: true,
    },
  ],

  registerFields: [
    {
      id: 1,
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      icon: <FaUser className="w-5 h-5 text-gray-500" />,
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
      icon: <FaEnvelope className="w-5 h-5 text-gray-500" />,
      required: true,
    },
    {
      id: 3,
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      icon: <FaPhone className="w-5 h-5 text-gray-500" />,
      required: false,
    },
    {
      id: 4,
      name: "company",
      label: "Company",
      type: "text",
      placeholder: "Enter company name",
      icon: <FaBuilding className="w-5 h-5 text-gray-500" />,
      required: false,
    },
    {
      id: 5,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a password",
      icon: <FaLock className="w-5 h-5 text-gray-500" />,
      required: true,
    },
  ],

  social: [
    {
      id: 1,
      label: "Sign in with Google",
      FaGoogle,
      icon: <FaGoogle className="w-10 h-10" />,
      url: "/auth/google",
    },
    {
      id: 2,
      label: "Sign in with Facebook",
      icon: <FaFacebook className="w-10 h-10" />,
      url: "/auth/facebook",
    },
    {
      id: 3,
      label: "Sign in with Github",
      icon: <FaGithub className="w-10 h-10" />,
      url: "/auth/github",
    },
  ],

  formInfo: {
    login: {
      title: "Welcome Back",
      submitButton: "Sign In",
      altText: "Don't have an account?",
      altAction: "Register",
    },
    register: {
      title: "Create Account",
      submitButton: "Sign Up",
      altText: "Already have an account?",
      altAction: "Login",
    },
  },
} as const;

export default authData;
