import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Error } from './pages/Error/Error'
import { Navigation } from './components/Navigation/Navigation'
import { SignInSignUp } from './pages/SignInSignUp/SignInSignUp'

export const App = () => (
  <>
    <Routes>
      <Route element={<Navigation />}>
        <Route element={<Home />} path="/" />
        <Route element={<SignInSignUp />} path="/sign-in" />
      </Route>
      <Route element={<Error />} path="*" />
    </Routes>
  </>
)
