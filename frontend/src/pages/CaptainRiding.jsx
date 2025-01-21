import { Link } from "react-router-dom"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";


const CaptainRiding = () => {

    const [finishRiding, setFinishRiding] = useState(false);
    const finishRidingRef = useRef(null);

    useGSAP(()=>{
        if(finishRiding){
          gsap.to(finishRidingRef.current,{
            transform: "translateY(0)",
          })
        }else{
          gsap.to(finishRidingRef.current,{
            transform: "translateY(100%)",
          })
        }
      },[finishRiding]);


  return (
    <div className="h-screen">

 <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
  <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
  <Link to={'/home'} className='rounded-full flex items-center h-12 w-12 justify-center bg-white'>
    <i className="text-lg font-bold ri-logout-box-r-line"></i>
    </Link>
 </div>
    
            <div className="h-4/5 ">
                <img className="h-full w-full object-cover" src="https://storage.googleapis.com/support-forums-api/attachment/thread-5374933-2852463376184676745.jpg" alt="" />
            </div>
    
            <div className="h-1/5 p-6 bg-yellow-400 flex relative items-center justify-between">
            <h5
        className="absolute p-1 text-center top-0  w-[90%]"
      >
        <i className="ri-arrow-up-wide-line text-3xl text-gray-600"></i>
      </h5>

         <h4 className="text-xl font-semibold">4Km away</h4>
         <button className="bg-green-600 font-semibold p-3 px-10 text-white rounded-lg ">Complete Ride</button>
            </div>

            <div ref={finishRidingRef} className="fixed w-full translate-y-full z-10 bottom-0  bg-white px-3 py-6 pt-12">
<PopUp setPopUpPanel={setPopUpPanel} />
      </div>

        </div>
  )
}

export default CaptainRiding