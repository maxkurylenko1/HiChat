import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../pages/About/About';
import { EPageRoutes } from '../types/enums/EPageRoutes';
import ProtectedRoute from './ProtectedRoute';
import RootContainer from '../pages/Root/RootContainer';
import SignInContainer from '../pages/SignIn/SignInContainer';
import SignUpContainer from '../pages/SignUp/SignUpContainer';
import NotFoundContainer from '../pages/NotFound/NotFoundContainer';

const Navigator = () => (
  <div>
    <Routes>
      <Route
        path={EPageRoutes.ROOT_PAGE_ROUTE}
        element={(
          <ProtectedRoute>
            <RootContainer />
          </ProtectedRoute>
        )}
      />
      <Route
        path={EPageRoutes.ABOUT_PAGE_ROUTE}
        element={(
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        )}
      />
      <Route path={EPageRoutes.SIGN_IN_PAGE_ROUTE} element={<SignInContainer />} />
      <Route path={EPageRoutes.SIGN_UP_PAGE_ROUTE} element={<SignUpContainer />} />
      <Route path="*" element={<Navigate to={EPageRoutes.NOT_FOUND_PAGE_ROUTE} replace />} />
      <Route path={EPageRoutes.NOT_FOUND_PAGE_ROUTE} element={<NotFoundContainer />} />
    </Routes>
  </div>
);

export default Navigator;
