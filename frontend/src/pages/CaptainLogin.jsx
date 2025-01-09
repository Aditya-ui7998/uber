import { useState } from "react"
import { Link } from "react-router-dom"

const CaptainLogin = () => {

  const[ email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
       password:password
      });
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
            <p className='text-center'>Join us? <Link to='/captain-signup' className='text-blue-600'>Register as a captain </Link></p>
        </form>
      </div>

<div>
  <Link to='/login' className="flex items-center justify-center rounded px-4 py-2  w-full text-lg  placeholder:text-base bg-green-500 text-white font-semibold">
    Sign in as User
  </Link>
</div>

    </div>
  )
}

export default CaptainLogin
