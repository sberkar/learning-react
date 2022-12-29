import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/Auth-Context";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import PostCreate from "./pages/PostCreate";
import Post from "./pages/Post"

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user">
          <Route path="login" element={<Login />} />
          <Route path="account" element={<User />} />
        </Route>
        <Route path="/post" >
          <Route path="create" element={<PostCreate />} />
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
