import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Start from "./pages/Start";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <div>
<Routes>
<Route path="/" element={<Start />} />
  <Route path="/home" element={
    <UserProtectedWrapper>
      <Home />
    </UserProtectedWrapper>
    
    } />
  <Route path="/login" element={<UserLogin />} />
  <Route path="/signup" element={<UserSignup />} />
  <Route path="/captain-login" element={<CaptainLogin />} />
  <Route path="/captain-signup" element={<CaptainSignup />} />
  <Route path="/captain-home" element={
   <CaptainProtectedWrapper>
    <CaptainHome />
    </CaptainProtectedWrapper>
    } />
{/* <Route path="/start" element={<Start />} /> */}
<Route path="/user/logout" element={<UserLogout />} />
<Route path="/captain/logout" element={<CaptainLogout />} />


</Routes>

    </div>
  )
}

export default App