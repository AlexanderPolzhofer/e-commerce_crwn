import { Link, Outlet } from 'react-router-dom'
import { LogoSVG } from '../LogoSVG/LogoSVG'
import CrwnLogo from '../../assets/crown.svg'
import { LinkContainer, NavigationBar } from './Navigation.style'

export const Navigation = () => (
  <>
    <NavigationBar>
      <Link to="/">
        <LogoSVG source={CrwnLogo} />
      </Link>
      <LinkContainer>
        <Link to="/shop">SHOP</Link>
        <Link to="/authentication">AUTHENTICATION</Link>
      </LinkContainer>
    </NavigationBar>
    <Outlet />
  </>
)
