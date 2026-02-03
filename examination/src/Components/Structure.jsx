//Får inte sidan att fungera med navbar med länkar + footer med länkar
//Med en till component med Outlet kan jag välja layout på sidan som v6 rr förstår.

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Structure() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
