import React from "react";
import {
  FaChartLine,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export const NexusBankFooter = [
  {
    id: 1,
    title: "Company",
    url: "./about",
    icon: <FaChartLine className="text-accent-DEFAULT w-12 h-12" />,
  },
];

export const footerLinks = {
  company: [
    { title: "About", url: "/about" },
    { title: "Careers", url: "/careers" },
    { title: "Contact", url: "/contact" },
  ],
  legal: [
    { title: "Privacy", url: "/privacy" },
    { title: "Terms", url: "/terms" },
    { title: "Security", url: "/security" },
  ],
  social: [
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaGithub />, url: "https://github.com" },
  ],
};
