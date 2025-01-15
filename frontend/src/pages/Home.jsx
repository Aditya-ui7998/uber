// import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from "../components/LocationSearchPanel";
import 'remixicon/fonts/remixicon.css';


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(()=>{
if(panelOpen){
  gsap.to(panelRef.current,{
    height:'70%',
    padding:20
  })
  gsap.to(panelClose.current,{
    opacity:1
  })
}else{
  gsap.to(panelRef.current,{
    height:'0%',
    padding:24
  })
  gsap.to(panelClose.current,{
    opacity:0
  })
}
  },[panelOpen]);

  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: "translateY(0)",
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform: "translateY(100%)",
      })
    }
  },[vehiclePanel])


  return (
    <div
     className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div  className="h-screen w-screen">
        {/* temporary img */}
        <img
          className="w-full h-full object-cover"
          src="https://storage.googleapis.com/support-forums-api/attachment/thread-5374933-2852463376184676745.jpg"
          alt=""
        />
      </div>

      <div className="absolute flex flex-col justify-end  h-screen top-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative">
        <h5 ref={panelClose} onClick={()=>{setPanelOpen(false)}} className="absolute opacity-0 right-6 top-6 text-2xl">
        <IoIosArrowDown />
    </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line bg-gray-900 rounded-full w-1 absolute top-[40%] left-10 h-16"></div>
            <input
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eeeeee] px-12 py-2 rounded-lg text-lg w-full mt-5"
              type="text"
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e)=>{
               setDestination(e.target.value);
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6">
      <h5 onClick={()=>{
        setVehiclePanel(false);
      }} className="absolute top-0 left-1/2  flex items-center justify-center">
  <i className="ri-arrow-down-s-fill text-2xl"></i>
</h5>

        <h3 className="text-2xl mb-3 font-semibold">Choose a vehicle</h3>
        <div className="border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between p-3">
          <img className="w-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-lg">UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-2xl font-semibold">$10</h2>
        </div>

        <div className="border-2 active:border-black bg-gray-100  mb-2 rounded-xl flex w-full items-center justify-between p-3">
          <img className="w-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-lg">Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">3mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-2xl font-semibold">$5</h2>
        </div>

        <div className="border-2 active:border-black bg-gray-100  mb-2 rounded-xl flex w-full items-center justify-between p-3">
          <img className="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-lg">Auto <span><i className="ri-user-fill">5</i></span></h4>
            <h5 className="font-medium text-sm">5mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, auto rides</p>
          </div>
          <h2 className="text-2xl font-semibold">$12</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
