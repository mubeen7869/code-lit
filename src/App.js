//import Assets from "./Assets/Assets";
import Forget_Password from "./Forget_Password/Forget_Password";
// import Empdetails from "./Hr management/employee/Empdetails";
import Hr from "./Hr_Home/Hr_Home";
import Client_Registration from "./Hr_lap/Client lap/Regestration/Client_Registration";
import Vender_registration from "./Hr_lap/Vender lap/Registration/Vender_registration";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Userinfo from "./Userinfo/Userinfo";

import FirstFloor from "./assets lap/assetregistration/1stfloor/FirstFloor";
import SecondFloor from "./assets lap/assetregistration/2ndfloor/SecondndFloor";
import Registration from "./employee lap/register/Registration";
import ITRegistration from "./it_lap/it_lap_registration/ITRegistration";
import Main from "./main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   <Main/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/signUp" element={<Main/>}/>
      <Route path="/home" element={<Hr/>}/>
      <Route path="/Forget_Password" element={<Forget_Password/>}/>
      {/* <Route path="/empdetails" element={<Empdetails/>}/> */}
      <Route path="/home/userinfo" element={<Userinfo/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/firstfloor" element={<FirstFloor/>}/>
      <Route path="/secondfloor" element={<SecondFloor/>}/>
      <Route path="/vendor_registration" element={<Vender_registration/>}/>
      <Route path="/itlap" element={<ITRegistration/>}/>
      <Route path="/Client_Registration" element={<Client_Registration/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
