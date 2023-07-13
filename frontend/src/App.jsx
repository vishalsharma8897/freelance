import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/myGigs" element={<MyGigs />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:id" element={<Message />} />
          <Route path="/add" element={<Add />} />
          <Route path="/gig/:id" element={<Gig />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );

  return router;
}

export default App;
