// Här görs alla routingar, då det är kroppen, layout, struktur för appen
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/games" element={<Games></Games>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
