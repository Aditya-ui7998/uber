import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
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
        });
    } else {
      navigate("/login"); // If no token, redirect directly to login
    }
  }, [token]); // Add dependencies for `useEffect`

  return <div>Logging you out...</div>;
};

export default UserLogout;
