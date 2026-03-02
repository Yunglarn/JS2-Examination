// Här görs alla routingar, då det är vad som renderas in på skärmen
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Structure from "./Components/Structure";
//importerar logo hit, props till Structure.
import logo from "./assets/logo.jpg";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route element={<Structure logo={logo} />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
