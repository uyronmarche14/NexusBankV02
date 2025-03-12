"use client";
import { input } from "framer-motion/client";
import React, { useState } from "react";

const HomePage: React.FC = () => {
  const [getMessage, setGetMessage] = useState<string>("");
  const [postMessage, setPostMessage] = useState<string>("");
  const [inputData, setInputData] = useState<string>("");

  const testGet = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/test");
      const data = await response.json();
      setGetMessage(data.message);
      console.log(data);
    } catch (error) {
      setGetMessage("Error connecting to server");
      console.log(error);
    }
  };

  const datashow = async () => {
    console.log(inputData);
    return inputData;
  };

  const testPost = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ testData: inputData }),
      });
      const data = await response.json();
      setPostMessage(data.message + ": " + data.receivedData);
    } catch (error) {
      setPostMessage("Error connecting to server");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-4">API Connection Test</h1>

      <div className="flex flex-col items-center gap-2">
        <button
          onClick={testGet}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Test GET Request
        </button>
        {getMessage && <p>Response: {getMessage}</p>}
      </div>

      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter test data"
        />
        <button
          onClick={() => {
            testPost();
            datashow();
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Test POST Request
        </button>
        {postMessage && <p>Response: {postMessage}</p>}
      </div>
    </div>
  );
};

export default HomePage;
