// import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from "../components/LocationSearchPanel";
import 'remixicon/fonts/remixicon.css';
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRide, setConfirmRide] = useState(false);
  const confirmRidePanelRef = useRef(null);
const [vehicleFound, setVehicleFound] = useState(false);
const vehicleFoundRef = useRef(null);
const waitingForDriverRef = useRef(null);
const [waitingForDriver, setWaitingForDriver] = useState(false)

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

  useGSAP(()=>{
    if(confirmRide){
      gsap.to(confirmRidePanelRef.current,{
        transform: "translateY(0)",
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform: "translateY(100%)",
      })
    }
  },[confirmRide])

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: "translateY(0)",
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform: "translateY(100%)",
      })
    }
  },[vehicleFound])

  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform: "translateY(0)",
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform: "translateY(100%)",
      })
    }
  },[waitingForDriver])


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

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
    <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
    <ConfirmRide setConfirmRide={setConfirmRide} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef}  className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
   <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
   <WaitingForDriver setWaitingForDriver ={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
