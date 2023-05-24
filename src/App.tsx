import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Error } from './pages/Error/Error'
import { Navigation } from './components/Navigation/Navigation'

export const App = () => (
  <>
    <Routes>
      <Route element={<Navigation />}>
        <Route element={<Home />} path="/" />
      </Route>
      <Route element={<Error />} path="*" />
    </Routes>
  </>
)
