// AdminLayout.js
import React from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css"; // Keep your dashboard styling

const AdminLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">{children}</div>
    </div>
  );
};

export default AdminLayout;
