import React, { useState, useEffect } from "react";

const ErrorAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  console.log("ErrorAlert");

  return (
    <div
      className="alert alert-danger"
      role="alert"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      Something went wrong. Please try again later!
    </div>
  );
};

export default ErrorAlert;
