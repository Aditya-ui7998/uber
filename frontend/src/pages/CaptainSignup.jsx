import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { setCaptains } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptains(data);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Failed to sign up. Please try again.");
    } finally {
      // Reset form fields
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
    }
  };

  return (
    <div className="p-7 h-screen flex justify-between flex-col">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className="flex gap-4">
            <input
              className="rounded px-4 py-2 border mb-5 w-1/2 text-lg placeholder:text-base bg-[#eeeeee]"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="rounded px-4 py-2 border mb-5 w-1/2 text-lg placeholder:text-base bg-[#eeeeee]"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            className="rounded px-4 py-2 border mb-5 w-full text-lg placeholder:text-base bg-[#eeeeee]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
          />

          <h3 className="text-lg font-medium mb-2">What's your password?</h3>
          <input
            className="rounded px-4 py-2 border w-full text-lg mb-5 placeholder:text-base bg-[#eeeeee]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4">
            <input
              className="rounded px-4 py-2 border mb-5 w-1/2 text-lg placeholder:text-base bg-[#eeeeee]"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
            />
            <input
              className="rounded px-4 py-2 border mb-5 w-1/2 text-lg placeholder:text-base bg-[#eeeeee]"
              type="text"
              placeholder="Vehicle Plate Number"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-4">
            <input
              className="rounded px-4 py-2 border mb-5 w-1/2 text-lg placeholder:text-base bg-[#eeeeee]"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
            />
            <select
              className="rounded px-4 py-2 border mb-5 w-1/2 text-lg bg-[#eeeeee]"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className="rounded px-4 py-2 mb-3 w-full text-lg bg-[#111] text-white font-semibold">
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Log in
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-xs">
          By continuing here, you agree to our privacy and policies, which are
          completely safe. Enjoy your ride! 😊
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
