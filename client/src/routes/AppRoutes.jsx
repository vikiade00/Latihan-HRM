import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/layout/adminLayout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Karir from "../pages/admin/karir/Karir";
import FormKarir from "../pages/admin/karir/FormKarir";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="karir" element={<Karir />} />
          <Route path="karir/form" element={<FormKarir />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
