import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyTopics from "./pages/MyTopics";
import Profil from "./pages/Profil";
import ShowForum from "./pages/ShowForum";
import NotFound from "./pages/NotFound";
import CreateForum from "./pages/CreateForum";
import EditForum from "./pages/EditForum";
export default function App() {
  useEffect(() => {
    let darkVal = localStorage.getItem("is_dark");
    //  if(darkVal==="")
    let classDark = document.documentElement.classList;
    darkVal === "true" ? classDark.add("dark") : classDark.remove("dark");
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-topics" element={<MyTopics />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/create-forum" element={<CreateForum />} />
      <Route path="/edit-forum/:id" element={<EditForum />} />
      <Route path="/forum/:id" element={<ShowForum />} />
    </Routes>
  );
}
