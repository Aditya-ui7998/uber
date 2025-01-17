import React from 'react'
import 'remixicon/fonts/remixicon.css';

const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
    <div>
    <h5
      onClick={() => {
        setWaitingForDriver(false);
      }}
      className="absolute top-0   flex items-center justify-center w-full"
    >
      <i className="ri-arrow-down-s-fill text-2xl"></i>
    </h5>

    <div className='flex items-center justify-between'>
    <img
        className="h-24"
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
        alt=""
      />

      <div className='text-right'>
        <h2 className='text-lg font-medium'>Aditya</h2>
        <h4 className='text-xl font-semibold'>MP95 345</h4>
        <p className='text-sm text-gray-600'>Maruti Suzuki Baleno</p>
      </div>

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

    </div>
  </div>
  )
}

export default WaitingForDriver