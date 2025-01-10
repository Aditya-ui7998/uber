import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Logout failed:", error);
          alert("Logout failed. Please try again.");
        });
    } else {
      navigate("/login"); // Navigate to login if no token is found
    }
  }, [token, navigate]); // Add dependencies to ensure consistent behavior

  return <div>Logging Out...</div>;
};

export default CaptainLogout;
