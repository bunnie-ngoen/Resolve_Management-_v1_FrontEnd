import { NavLink, Outlet } from "react-router-dom";
import React from "react";

const AdminLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '220px', backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px' }}>
        <h2>Admin Panel</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NavLink 
            to="/admin" 
            style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1', textDecoration: 'none' })}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/admin/users" 
            style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1', textDecoration: 'none' })}
          >
            User Management
          </NavLink>
          <NavLink 
            to="/admin/settings" 
            style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1', textDecoration: 'none' })}
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#ecf0f1' }}>
        <header style={{ marginBottom: '20px' }}>
          <h1>Welcome, Admin!</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
