//Återanvändbar navbar, använder mig utav Navlink för tydliga klickbara länkar.
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    // nav, because yay semantisk html
    <nav>
      <NavLink to="/">Start</NavLink> |{" "}
      <NavLink to="/games">Sök i Spelkatalogen</NavLink> |{" "}
      <NavLink to="/about">Om oss</NavLink> |{" "}
      <NavLink to="/contact">Kontakt</NavLink>
    </nav>
    // |{" "} gör bara ett lodrätt streck följt av ett mellanslag innan nästa länk.
  );
}

export default Navbar;
// exporterar så att denna komponent kan importeras annan stans
