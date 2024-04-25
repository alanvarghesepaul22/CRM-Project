import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReadRecords from "./ReadRecord";

const Dashboard = () => {
  const [response, setResponse] = useState("");
  const [decode, setDecode] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("authTokens");

  useEffect(() => {
    if (token == null) {
      navigate("/login");
    } else {
      const data = jwtDecode(token);
      setDecode(data);
    }
  }, []);

  let username = decode.full_name;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/test/");
        setResponse(response.data.response);
      } catch (error) {
        console.log("New Error:", error);
        setResponse("Something Went Wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <div className="w-4/5 mb-7">
      <p className="font-bold text-2xl">Welcome, {username}</p> 
      </div>
      
      <ReadRecords />
    </div>
  );
};
export default Dashboard;
