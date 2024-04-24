import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const session = localStorage.getItem("authTokens");
    if (session) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <p className="text-bold text-5xl text-yellow-400">
        Welcome to CRM Dashboard
      </p>
      <p className="w-2/4 text-center text-neutral-500 text-xl">
        Welcome to our CRM platform, where streamlined efficiency meets
        personalized connections. Empowering businesses to cultivate lasting
        relationships with customers, our intuitive system seamlessly integrates
        data management, communication tools, and analytics. Discover how our
        CRM solution can propel your organization forward, one meaningful
        interaction at a time.
      </p>
    </div>
  );
};

export default HeroPage;
