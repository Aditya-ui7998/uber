import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmPopUp = ({ setPopUpPanel, setConfirmPopUpPanel }) => {

 const submitHandler =(e)=>{
console.log('hi')
  }

  return (
    <div>
          <h5
        onClick={() => {
            setConfirmPopUpPanel(false);
        }}
        className="absolute top-0   flex items-center justify-center w-full"
      >
        <i className="ri-arrow-down-s-fill text-2xl"></i>
      </h5>

      <h3 className="text-2xl mb-3 font-semibold">Confirm this ride to Start</h3>

      <div className='flex items-center justify-between mt-4 bg-yellow-400 p-3 rounded-lg'>
        <div className='flex items-center gap-3 '>
            <img className='h-12 w-10 rounded-full  object-cover' src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947" alt="" />
            <h2 className='text-lg font-medium'>Adi Bro</h2>
        </div>
        <h2 className='text-lg font-semibold'>5.2km</h2>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col">
        

        <div className="w-full mt-5">
          <div className="w-full flex items-center p-3 border-b-2 gap-5">
            <i className="text-lg ri-map-pin-user-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">34/A1</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kathiyan,Gola Madhaya Pradesh
              </p>
            </div>
          </div>

          <div className="w-full flex items-center p-3 border-b-2 gap-5">
            <i className="text-lg ri-map-pin-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">34/A1</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kathiyan,Gola Madhaya Pradesh
              </p>
            </div>
          </div>

          <div className="w-full flex items-center p-3 gap-5">
            <i className="text-lf ri-currency-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">$20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>


<form action="">

</form>


        <div className='mt-6 w-full'>
       <form onSubmit={(e)=>{
        submitHandler(e);
       }}>

<input type="text" placeholder='enter otp'  className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5"/>

       <Link to='/captain-riding' className="flex justify-center w-full mt-5 bg-green-500 text-white p-2 font-semibold">
          Confirm
        </Link>

        <button onClick={()=>{
         setConfirmPopUpPanel(false)
         setPopUpPanel(false)
          }} className="w-full mt-1 bg-red-500 text-white p-2 font-semibold">
        Cancel
        </button>
       </form>
        </div>
      </div>
    </div>
  )
}

export default ConfirmPopUp