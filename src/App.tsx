import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Error } from './pages/Error/Error'
import { Navigation } from './components/Navigation/Navigation'
import { Authentication } from './pages/Authentication/Authentication'
import { Category } from './pages/Category/Category'

export const App = () => (
  <>
    <Routes>
      <Route element={<Navigation />}>
        <Route element={<Home />} path="/" />
        <Route element={<Authentication />} path="/authentication" />
        <Route element={<Category />} path="/:category" />
      </Route>
      <Route element={<Error />} path="*" />
    </Routes>
  </>
)
