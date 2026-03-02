//Får inte sidan att fungera med navbar med länkar + footer med länkar
//Med en till component med Outlet kan jag välja layout på sidan som v6 rr förstår.

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoPicture from "./Headerlogo";

function Structure({ logo }) {  // tar emot logo via props och placerar accordingly.
  return (
    <>
      <LogoPicture image={logo} />
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default Structure;