import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
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
    
    <div className="flex p-3 bg-gray-50 justify-center gap-5 items-start">
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
  )
}

export default CaptainDetails
