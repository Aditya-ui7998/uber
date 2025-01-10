import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/UserContext";

const UserProtectedWrapper = ({ children }) => {

 const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [ isLoading , setIsLoading ] = useState(true);
    const { user , setUser } = useContext(UserDataContext);

    useEffect(()=>{

        if(!token){
    navigate('/login');
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
          headers:{
            Authorization: `Bearer ${token}`
          }.then(response =>{
            if(response.status === 200){
              setIsLoading(false);
              setUser(response.data.user);
            }
          })
          .catch(error =>{
            console.log(error);
            localStorage.removeItem('token');
            navigate('/login');
          })
        })

        if(isLoading){
          return <div>Loading...</div>
        }
    })

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper