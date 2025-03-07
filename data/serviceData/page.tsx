import React from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaCreditCard,
  FaExchangeAlt,
  FaPiggyBank,
  FaRegBell,
} from "react-icons/fa";

export const NexusBankServices = [
  {
    id: 1,
    title: " Investment Analysis",
    description:
      "Gain insights into your portfolio with detailed reports and analytics tailored to optimize performance.",
    icon: <FaChartLine className="text-accent-DEFAULT w-12 h-12" />,
  },
  {
    id: 2,
    title: "Advanced Fraud Detection",
    description:
      "Protect your assets with industry-leading security measures and real-time alert systems.",
    icon: <FaShieldAlt className="text-accent-DEFAULT w-12 h-12" />,
  },
  {
    id: 3,
    title: "Seamless Payment Solutions",
    description:
      "Manage your digital and physical cards effortlessly for secure and efficient transactions.",
    icon: <FaCreditCard className="text-accent-DEFAULT w-12 h-12" />,
  },
  {
    id: 4,
    title: "Global Money Management",
    description:
      "Effortlessly handle international transfers with competitive rates and automated currency exchanges.",
    icon: <FaExchangeAlt className="text-accent-DEFAULT w-12 h-12" />,
  },
  {
    id: 5,
    title: "Strategic Financial Planning",
    description:
      "Utilize AI-driven recommendations to plan and achieve long-term financial objectives.",
    icon: <FaPiggyBank className="text-accent-DEFAULT w-12 h-12" />,
  },
  {
    id: 6,
    title: "Proactive Financial Alerts",
    description:
      "Receive timely notifications for account activities, trends, and opportunities to maximize your finances.",
    icon: <FaRegBell className="text-accent-DEFAULT w-12 h-12 " />,
  },
];

export const sampleData = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    contactNumber: "+1234567890",
    address: "123 Main St, Anytown, USA",
    accountNumber: "123456789",
    accountType: "Savings",
    balance: 1500.75,
    lastTransactionDate: "2023-10-01",
    branch: "Downtown",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    contactNumber: "+1987654321",
    address: "456 Elm St, Othertown, USA",
    accountNumber: "987654321",
    accountType: "Checking",
    balance: 2500.0,
    lastTransactionDate: "2023-10-15",
    branch: "Uptown",
  },
];
