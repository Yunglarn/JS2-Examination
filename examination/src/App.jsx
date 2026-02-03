// Här görs alla routingar, då det är vad som renderas in på skärmen
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Structure from "./Components/Structure";
import './App.css'


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Structure />}>
        <Route path="/" element={<Home></Home>} />
        <Route path="/games" element={<Games></Games>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
