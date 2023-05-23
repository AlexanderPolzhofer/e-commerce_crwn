import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Error } from './pages/Error/Error'

export const App = () => (
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Error />} path="*" />
  </Routes>
)
