import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
    <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1568236081292-9a7361b0022f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWZmaWNsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full ">
      <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-3xl font-bold">Get started with Uber</h2>
        <Link to='/login' className="flex item-center justify-center  w-full bg-black text-white py-3 rounded-sm mt-5">Continue</Link>
      </div>
    </div>
  </div>
  )
}

export default Home