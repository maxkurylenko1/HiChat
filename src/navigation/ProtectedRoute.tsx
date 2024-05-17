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
  const { loading } = useAppSelector((state) => state.SignInSlice);
  const accessToken = window.localStorage.getItem('token');

  if (!accessToken) {
    return <Navigate to={EPageRoutes.SIGN_IN_PAGE_ROUTE} />;
  }

  if (isTokenExpired(accessToken)) {
    return <Navigate to={EPageRoutes.SIGN_IN_PAGE_ROUTE} />;
  }

  if (loading) {
    return (
      <div
        style={stylesForSpin}
      >
        <Spin spinning={loading} size="large" />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
