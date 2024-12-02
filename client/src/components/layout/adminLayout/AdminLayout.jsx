import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <div>
      <div className="flex gap-5">
        <Sidebar />
        <main className="py-6 px-2 w-full">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
