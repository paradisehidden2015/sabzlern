import React from "react";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import "./Header.css";

export default function Header() {
  return (
    <header class="header">
      <Topbar />
      <Navbar />
      <Landing />
    </header>
  );
}
