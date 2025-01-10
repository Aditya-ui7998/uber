import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/userContext"
import { useContext } from "react"
import axios from "axios"

const UserLogin = () => {

  const[ email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext); 

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
       password:password
      };

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);

if(response.status === 200){
  const data = response.data;
  setUser(data);
  localStorage.setItem('token', data.token);
  console.log('login successful');
  navigate('/home');
}

  }

  return (
    <div className="p-7 h-screen flex justify-between flex-col ">
      <div>
      <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e);
          setEmail('');
          setPassword('');
        }} >
            <h3 className="text-lg font-medium mb-2">Whats your email address?</h3>
            <input className="rounded px-4 py-2 border mb-7 w-full text-lg  placeholder:text-base bg-[#eeeeee]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             placeholder="email@example.com" 
             required/>

            <h3 className="text-lg font-medium mb-2">Whats your password?</h3>
            <input className="rounded px-4 py-2 border w-full text-lg mb-7 placeholder:text-base bg-[#eeeeee]"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
               required/>
            <button className="rounded px-4 py-2 mb-3 w-full text-lg  placeholder:text-base bg-[#111] text-white font-semibold">Login</button>
            <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create a new Account </Link></p>
        </form>
      </div>

<div>
  <Link to='/captain-login' className="flex items-center justify-center rounded px-4 py-2  w-full text-lg  placeholder:text-base bg-[#f3c267] text-white font-semibold">
    Sign in as captain
  </Link>
</div>

    </div>
  )
}

export default UserLogin