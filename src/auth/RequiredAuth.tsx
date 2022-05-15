import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isLogin?: boolean;
  prevPath?: string;
  children: ReactElement;
};

const RequiredAuth = ({ isLogin, prevPath, children }: Props) => {
  if (isLogin) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default RequiredAuth;
