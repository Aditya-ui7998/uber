import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = ({ setVehiclePanel, setPanelOpen }) => {
  // Sample array of locations
  const locations = [
    { id: 1, address: "24b, Near sharma cafe, Area dhobi chowk 52, Goa" },
    { id: 2, address: "25b, Near abc cafe, Area dhobi chowk 52, Goa" },
    { id: 3, address: "26b, Near xyz cafe, Area dhobi chowk 52, Goa" },
    { id: 4, address: "27b, Near sinha cafe, Area dhobi chowk 52, Goa" },
  ];

  return (
    <div>
      {locations.map((location) => (
        <div
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
          key={location.id}
          className="flex gap-4 p-3 border-2 rounded-xl active:border-black items-center my-4 justify-start cursor-pointer hover:bg-gray-200"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setVehiclePanel(true);
              setPanelOpen(false);
            }
          }}
        >
          <h2 className="p-4 bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location.address}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
