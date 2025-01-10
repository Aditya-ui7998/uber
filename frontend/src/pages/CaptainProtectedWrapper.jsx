import { Children, useEffect,useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';



const CaptainProtectedWrapper = ({Children}) => {

const token = localStorage.getItem('token');
const navigate = useNavigate();
const [ isLoading , setIsLoading ] = useState(true);
 const { captains , setCaptains } = useContext(CaptainDataContext);

useEffect(()=>{
    if(!token){
        navigate('/captain-login');
    }
    
},[ token ])

axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    headers:{
        Authorization: `Bearer ${token}`
    }.then(response =>{
        if(response.status === 200){
            setCaptains(response.data.captain);
            setIsLoading(false);
        }
    })
    .catch(error =>{
        console.log(error);
        localStorage.removeItem('token');
        navigate('/captain-login');
    })
})


if(isLoading){
    return <div>Loading...</div>
}

  return (
    <>
    {Children}
    </>
  )
}

export default CaptainProtectedWrapper