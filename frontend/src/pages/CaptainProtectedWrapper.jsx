import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { setCaptains } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
      return; // Exit early if no token
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptains(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem('token');
        navigate('/captain-login');
      });
  }, [token, navigate, setCaptains]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
