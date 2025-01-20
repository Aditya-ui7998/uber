import { Link } from "react-router-dom"
import CaptainDetails from "../components/CaptainDetails"
import PopUp from "../components/PopUp"
import { useRef, useState } from "react"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmPopUp from "../components/ConfirmPopUp";


const CaptainHome = () => {

  const [popUpPanel, setPopUpPanel] = useState(true);
  const [confirmPopUpPanel, setConfirmPopUpPanel] = useState(false);
  const popUpRef = useRef(null);
  const confirmPopUpRef = useRef(null);


  useGSAP(()=>{
    if(popUpPanel){
      gsap.to(popUpRef.current,{
        transform: "translateY(0)",
      })
    }else{
      gsap.to(popUpRef.current,{
        transform: "translateY(100%)",
      })
    }
  },[popUpPanel]);


  useGSAP(()=>{
    if(confirmPopUpPanel){
      gsap.to(confirmPopUpRef.current,{
        transform: "translateY(0)",
      })
    }else{
      gsap.to(confirmPopUpRef.current,{
        transform: "translateY(100%)",
      })
    }
  },[confirmPopUpPanel]);


  return (
    <div className="h-screen">

 <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
  <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
  <Link to={'/home'} className='rounded-full flex items-center h-12 w-12 justify-center bg-white'>
    <i className="text-lg font-bold ri-logout-box-r-line"></i>
    </Link>
 </div>
    
            <div className="h-3/5 ">
                <img className="h-full w-full object-cover" src="https://storage.googleapis.com/support-forums-api/attachment/thread-5374933-2852463376184676745.jpg" alt="" />
            </div>
    
            <div className="h-2/5 p-6 ">
           <CaptainDetails/> 
            </div>

            <div ref={popUpRef} className="fixed w-full translate-y-full z-10 bottom-0  bg-white px-3 py-6 pt-12">
<PopUp setPopUpPanel={setPopUpPanel} setConfirmPopUpPanel={setConfirmPopUpPanel}/>
      </div>

            <div ref={confirmPopUpRef} className="fixed h-screen w-full translate-y-full z-10 bottom-0  bg-white px-3 py-6 pt-12">
<ConfirmPopUp setConfirmPopUpPanel={setConfirmPopUpPanel} setPopUpPanel={setPopUpPanel}/>
      </div>

        </div>
  )
}

export default CaptainHome