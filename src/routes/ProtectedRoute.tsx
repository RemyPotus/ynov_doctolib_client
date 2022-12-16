import { Navigate } from "react-router-dom";
import { auth } from '../main';

export const ProtectedRoute = ({ children }:any) => {
  if (auth.currentUser === null) {
    return <Navigate to="/auth" />;
  }
  return children;
};