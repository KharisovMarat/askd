import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NotFound } from 'modules/notFound';
import { Main } from 'modules/main';
import { Path } from 'app/constants/routerPaths';
import { Auth, AuthSupport, ForgotPassword } from 'modules/auth';

const AuthPage = React.lazy(() => import('pages/AuthPage'));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Path.AUTH_PAGE} element={<AuthPage />}>
        <Route path={Path.LOGIN} element={<Auth />} />
        <Route path={Path.AUTH_SUPPORT} element={<AuthSupport />} />
        <Route path={Path.FORGOT} element={<ForgotPassword />} />
      </Route>

      <Route path={Path.MAIN} element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
