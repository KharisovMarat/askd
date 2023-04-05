import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Path } from 'app/constants/routerPaths';
import { Auth, AuthSupport, ForgotPassword } from '../../entities/auth';

const AuthPage = React.lazy(() => import('pages/AuthPage'));
const MainPage = React.lazy(() => import('pages/MainPage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));
const MonitoringPage = React.lazy(() => import('pages/MonitoringPage'));

const Router = () => (
  <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path={Path.AUTH_PAGE} element={<AuthPage />}>
          <Route path={Path.LOGIN} element={<Auth />} />
          <Route path={Path.AUTH_SUPPORT} element={<AuthSupport />} />
          <Route path={Path.FORGOT} element={<ForgotPassword />} />
        </Route>

        <Route path={Path.MAIN} element={<MainPage />}>
          <Route path={Path.MONITORING} element={<MonitoringPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
