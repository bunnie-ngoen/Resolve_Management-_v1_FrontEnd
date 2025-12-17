import { NavLink } from "react-router-dom";
import { Archive, Users, Table, CirclePlus, List } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Định nghĩa type cho menu item
type MenuItem = {
  name: string;
  path: string;
  icon: LucideIcon;
};

const mainMenu: MenuItem[] = [
  { name: "Dashboard", path: "dashboard", icon: Archive },
  { name: "Create user", path: "create-user", icon: CirclePlus },
  { name: "User List", path: "users", icon: List },
  { name: "Table List", path: "tables", icon: Table },
];

const accountMenu: MenuItem[] = [
  { name: "Profile", path: "profile", icon: Users },
];

// Thêm type cho tham số item
const renderItem = (item: MenuItem) => {
  const Icon = item.icon;

  return (
    <li key={item.path}>
      <NavLink to={item.path}>
        {({ isActive }) => (
          <div
            className={`flex items-center px-3 py-3 rounded-lg font-bold text-[13px]
              ${isActive ? "bg-white shadow-md ring-2 ring-gray-200" : ""}`}
          >
            <div
              className={`w-9 h-9 flex items-center justify-center rounded
                ${isActive ? "bg-orange-500" : "bg-gray-100"}`}
            >
              <Icon
                size={18}
                className={isActive ? "text-white" : "text-gray-700"}
              />
            </div>
            <span className="pl-4">{item.name}</span>
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default function AdminSidebar() {
  return (
    <div className="w-[17%] border-r border-gray-300">
      <div className="text-center p-8 font-bold border-b border-gray-300">
        Admin Dashboard
      </div>

      {/* MAIN MENU */}
      <ul className="flex flex-col gap-2 px-6 pr-4 mt-4">
        {mainMenu.map(renderItem)}
      </ul>

      {/* SECTION TITLE */}
      <h1 className="px-6 mt-8 mb-2 text-xs font-bold text-gray-400 uppercase">
        Account Pages
      </h1>

      {/* ACCOUNT MENU */}
      <ul className="flex flex-col gap-2 px-6 pr-4">
        {accountMenu.map(renderItem)}
      </ul>
    </div>
  );
}