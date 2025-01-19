import { Link } from "react-router-dom"


const CaptainHome = () => {
  return (
    <div className="h-screen">

 <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
  <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
  <Link to={'/home'} className='rounded-full flex items-center h-12 w-12 justify-center bg-white'>
    <i className="text-lg font-bold ri-logout-box-r-line"></i>
    </Link>
 </div>
    
            <div className="h-1/2 ">
                <img className="h-full w-full object-cover" src="https://storage.googleapis.com/support-forums-api/attachment/thread-5374933-2852463376184676745.jpg" alt="" />
            </div>
    
            <div className="h-1/2 p-6 ">
           
           <div className="flex items-center justify-between border-b-2 border-gray-200 mb-5">
            <div className="flex items-center justify-start gap-3">
<img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
<h4 className="text-lg font-medium">Aditya Kashyap</h4>
            </div>

            <div>
              <h4 className="text-xl font-medium">₹295.50</h4>
              <p className="text-sm text-gray-600">Earned</p>
            </div>      
           </div>
    
    <div className="flex justify-center gap-5 items-start">
      <div  className="text-center">
      <i className="text-3xl font-thin ri-timer-2-line"></i>
      <h5 className="text-lg font-medium">10.2</h5>
      <p className="text-sm text-gray-600">Hours Online</p>
      </div>

      <div className="text-center">
      <i className="text-3xl font-thin ri-speed-up-line"></i>
      <h5 className="text-lg font-medium">10.2</h5>
      <p className="text-sm text-gray-600">Hours Online</p>
      </div>

      <div className="text-center">
      <i className="text-3xl font-thin ri-booklet-line"></i>
      <h5 className="text-lg font-medium">10.2</h5>
      <p className="text-sm text-gray-600">Hours Online</p>
      </div>
    </div>
            </div>
        </div>
  )
}

export default CaptainHome