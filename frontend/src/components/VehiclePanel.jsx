

const VehiclePanel = ({setVehiclePanel, setConfirmRide}) => {
  return (
    <div>
          <h5 onClick={()=>{
        setVehiclePanel(false);
      }} className="absolute top-0   flex items-center justify-center w-full">
  <i className="ri-arrow-down-s-fill text-2xl"></i>
</h5>

        <h3 className="text-2xl mb-3 font-semibold">Choose a vehicle</h3>


        <div onClick={()=>{setConfirmRide(true)}} className="border-2 active:border-black bg-gray-100 mb-2 rounded-xl flex w-full items-center justify-between p-3">
          <img className="w-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-lg">UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-2xl font-semibold">$10</h2>
        </div>

        <div onClick={()=>{setConfirmRide(true)}} className="border-2 active:border-black bg-gray-100  mb-2 rounded-xl flex w-full items-center justify-between p-3">
          <img className="w-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-lg">Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">3mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-2xl font-semibold">$5</h2>
        </div>

        <div onClick={()=>{setConfirmRide(true)}} className="border-2 active:border-black bg-gray-100  mb-2 rounded-xl flex w-full items-center justify-between p-3">
          <img className="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" alt="" />
          <div className="w-1/2">
            <h4 className="font-bold text-lg">Auto <span><i className="ri-user-fill">5</i></span></h4>
            <h5 className="font-medium text-sm">5mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, auto rides</p>
          </div>
          <h2 className="text-2xl font-semibold">$12</h2>
        </div>
    </div>
  )
}

export default VehiclePanel