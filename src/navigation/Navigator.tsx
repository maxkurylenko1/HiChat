import { Routes, Route, Navigate } from 'react-router-dom';
import { pageRoutes } from '../types/constants/pageRoutes';
import ProtectedRoute from './ProtectedRoute';
import RootContainer from '../pages/Root/RootContainer';
import SignInContainer from '../pages/SignIn/SignInContainer';
import SignUpContainer from '../pages/SignUp/SignUpContainer';
import NotFoundContainer from '../pages/NotFound/NotFoundContainer';

const Navigator = () => (
  <div>
    <Routes>
      <Route
        path={pageRoutes.ROOT_PAGE_ROUTE}
        element={(
          <ProtectedRoute>
            <RootContainer />
          </ProtectedRoute>
    )}
      />
      <Route path={pageRoutes.SIGN_IN_PAGE_ROUTE} element={<SignInContainer />} />
      <Route path={pageRoutes.SIGN_UP_PAGE_ROUTE} element={<SignUpContainer />} />
      <Route path="*" element={<Navigate to={pageRoutes.NOT_FOUND_PAGE_ROUTE} replace />} />
      <Route path={pageRoutes.NOT_FOUND_PAGE_ROUTE} element={<NotFoundContainer />} />
    </Routes>
  </div>
);

export default Navigator;
