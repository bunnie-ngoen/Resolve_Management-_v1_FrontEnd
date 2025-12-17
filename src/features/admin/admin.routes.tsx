import { lazy } from "react";

const DashboardPage = lazy(() => import("../admin/pages/DashboardPage"));
const UserListPage = lazy(() => import("../admin/pages/UserListPage"));
const TableListPage = lazy(() => import("../admin/pages/TableListPage"));
const AdminLayout = lazy(() => import("../admin/components/layouts/AdminLayout"));
const AdminProfile = lazy(()=> import("../admin/pages/AdminProfile"));
const CreateUserPage = lazy(() => import("../admin/pages/CreateUser"))
export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> }, // default /admin
      { path: "dashboard", element: <DashboardPage /> },
      { path: "create-user", element: <CreateUserPage/> },
      { path: "users", element: <UserListPage /> },
      { path: "tables", element: <TableListPage /> },
      { path: "profile", element: <AdminProfile/> },
      
    ],
  },
];
