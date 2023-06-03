import { SignIn } from '../../components/SignIn/SignIn'
import { SignUp } from '../../components/SignUp/SignUp'
import { SingInSignUpContainer } from './Authentication.style'

export const Authentication = () => (
  <SingInSignUpContainer>
    <SignUp />
    <SignIn />
  </SingInSignUpContainer>
)
