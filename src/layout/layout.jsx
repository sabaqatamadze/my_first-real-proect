import React from "react";
import Nav_bar from "../components/nav-bar/nav-bar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Fotter/Fotter";

function Layout() {
  return (
    <div>
      <Nav_bar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
