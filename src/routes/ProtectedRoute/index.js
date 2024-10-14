import { getUserId } from "../../utils/StorageUtils";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element: Element, path }) => {
  const userId = getUserId();

  if (!userId && path !== "/login") {
    return <Navigate to="/login" replace />;
  }

  if (path === "/login" && userId) {
    return <Navigate to="/" replace />;
  }

  return <Element />;
};
