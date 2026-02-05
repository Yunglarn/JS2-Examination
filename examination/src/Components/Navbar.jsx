//Återanvändbar navbar, använder mig utav Navlink för tydliga klickbara länkar.
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // nav, because yay semantisk html och SEO
    <nav> 
      <NavLink to="/" className="Navbutton">Start</NavLink> {" "}
      <NavLink to="/games" className="Navbutton">Sök i Spelkatalogen</NavLink> {" "}
      <NavLink to="/about" className="Navbutton">Om oss</NavLink> {" "}
      <NavLink to="/contact" className="Navbutton">Kontakt</NavLink>
    </nav>
    // |{" "} gör bara ett lodrätt streck följt av ett mellanslag innan nästa länk.
  );
}

export default Navbar;
// exporterar så att denna komponent kan importeras annan stans
