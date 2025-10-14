import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    // ✅ Clear Admin Session
    localStorage.removeItem("isAdmin");

    // ✅ Show Logout Popup
    setPopup(true);

    // ✅ Redirect after 1.5 seconds
    const timer = setTimeout(() => {
      setPopup(false);
      navigate("/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        flexDirection: "column",
      }}
    >
      {popup ? (
        <div
          style={{
            backgroundColor: "#222",
            padding: "30px 40px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Logging Out...</h2>
          <p style={{ color: "#ccc" }}>You have been logged out successfully.</p>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
}

export default LogOut;
