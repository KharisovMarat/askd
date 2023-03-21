import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NotFound } from 'modules/notFound'
import { Main } from 'modules/main'
import { Auth } from 'modules/auth'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default Router
