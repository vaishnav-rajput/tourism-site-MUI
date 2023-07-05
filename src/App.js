import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar"
import Tour from "./pages/Tour";

function App() {
  return (
    <div>
    <AppBar />
    
  
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<Tour/>}/> 
    </Routes>
  </div>
    );

  
}

export default App;
