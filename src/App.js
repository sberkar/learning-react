import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user">
          <Route path="login" element={<Login />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
