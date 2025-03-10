import React from "react";
import {
  FaChartLine,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiLightningBolt, HiArrowRight } from "react-icons/hi";
import AI from "@/public/ai.png";
import Security from "@/public/security.png";
import Tracking from "@/public/tracking.png";

export const FeatureLinks = {
  company: [
    {
      title: "Smart Banking Solutions",
      subtitle: "AI Technology",
      description:
        "Experience next-generation banking powered by advanced AI technology, delivering secure and personalized financial solutions.",
      urlTitle: "Explore feature",
      url: "/feature",
      image: AI,
    },
    {
      title: "Smart Secure Banking",
      subtitle: "Security Solutions",
      description:
        "Protect your assets with industry-leading security measures and real-time alert systems to ensure the safety and security of your financial information.",
      urlTitle: "Explore feature",
      url: "/feature",
      image: Security,
    },
    {
      title: "Tracking & Insights",
      subtitle: "Tracjing Analyzing",
      description:
        "Gain insights into your portfolio with detailed reports and analytics tailored to optimize performance.",
      urlTitle: "Explore feature",
      url: "/feature",
      image: Tracking,
    },
  ],

  social: [
    { icon: <HiLightningBolt /> },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaGithub />, url: "https://github.com" },
  ],
};
