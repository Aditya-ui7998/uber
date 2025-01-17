const ConfirmRide = ({ setConfirmRide, setVehicleFound }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setConfirmRide(false);
        }}
        className="absolute top-0   flex items-center justify-center w-full"
      >
        <i className="ri-arrow-down-s-fill text-2xl"></i>
      </h5>

      <h3 className="text-2xl mb-3 font-semibold">Confirm Your Ride</h3>

      <div className="flex gap-2 justify-between items-center flex-col">
        <img
          className="h-40"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
          alt=""
        />

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

        <button onClick={()=>{
          setVehicleFound(true);
          setConfirmRide(false);
          }} className="w-full mt-5 bg-green-500 text-white p-2 font-semibold">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
