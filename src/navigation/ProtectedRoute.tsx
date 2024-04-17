import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { Spin } from 'antd';
import { EPageRoutes } from '../types/enums/EPageRoutes';
import { useAppSelector } from '../hooks/redux';
import isTokenExpired from '../utils/isTokenExpired';

const stylesForSpin = {
  display: 'flex',
  height: '98vh',
  justifyContent: 'center',
  alignItems: 'center',
};

interface IProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute:FC<IProtectedRouteProps> = ({ children }) => {
  const { data, loading } = useAppSelector((state) => state.SignInSlice);

  const { token } = data;
  const isAuthenticated = token && !isTokenExpired(token);

  if (loading) {
    return (
      <div
        style={stylesForSpin}
      >
        <Spin spinning={loading} size="large" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={EPageRoutes.SIGN_IN_PAGE_ROUTE} />;
  }

  return children;
};

export default ProtectedRoute;
