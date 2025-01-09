import { useState } from "react"
import { Link } from "react-router-dom"

const UserSignup = () => {

  const[ email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setUserData({
      fullname:{
        firstName:firstName,
        lastName:lastName,
      },
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
      }}>

          <h3  className="text-lg font-medium mb-2">Whats your name?</h3>
        <div className="flex gap-4">
          <input className="rounded px-4 py-2 border mb-5 w-1/2 text-lg  placeholder:text-base bg-[#eeeeee]"
          type="text"
           placeholder="First name" 
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
           required/>
             <input className="rounded px-4 py-2 border mb-5 w-1/2 text-lg  placeholder:text-base bg-[#eeeeee]"
          type="text"
           placeholder="Last name" 
           value={lastName}
            onChange={(e) => setLastName(e.target.value)}
           required/>
        </div>

          <h3 className="text-lg font-medium mb-2">Whats your name?</h3>
          <input className="rounded px-4 py-2 border mb-5 w-full text-lg  placeholder:text-base bg-[#eeeeee]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           placeholder="email@example.com" 
           required/>

          <h3 className="text-lg font-medium mb-2">Whats your password?</h3>
          <input className="rounded px-4 py-2 border w-full text-lg mb-5 placeholder:text-base bg-[#eeeeee]"
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
             required/>
          <button className="rounded px-4 py-2 mb-3 w-full text-lg  placeholder:text-base bg-[#111] text-white font-semibold">Login</button>
          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here </Link></p>
      </form>
    </div>

<div>
<p className="text-xs">By Continuing here, you agree to you privacy and policies which are completely safe and enjoy your ride😊.</p>
</div>

  </div>
  )
}

export default UserSignup