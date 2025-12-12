import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/hooks/useAuth";
import { ROUTES } from "../../shared/constants/routes";
import { AUTH_ROLE } from "../auth/constants/auth.constants";

export default function UnauthorizedPage() {
  const navigate = useNavigate();
  const auth = useAuth();

  const goToMyDashboard = () => {
    switch (auth.user?.role) {
      case AUTH_ROLE.SUPERADMIN:
        navigate(ROUTES.SUPERADMIN_DASHBOARD);
        break;
      case AUTH_ROLE.ADMIN:
        navigate(ROUTES.ADMIN_DASHBOARD);
        break;
      case AUTH_ROLE.USER:
        navigate(ROUTES.USER_DASHBOARD);
        break;
      default:
        navigate(ROUTES.LOGIN);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">403</h1>
        <p className="text-xl mb-4">Unauthorized Access</p>
        <p className="text-gray-600 mb-6">
          Bạn không có quyền truy cập trang này.
        </p>
        <button
          onClick={goToMyDashboard}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Về trang của tôi
        </button>
      </div>
    </div>
  );
}