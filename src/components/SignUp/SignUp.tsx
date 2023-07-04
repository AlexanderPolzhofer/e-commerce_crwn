import { Formik } from 'formik'
import { TextInputField } from '../TextInputField/TextInputField'
import { CustomButton } from '../Button/Button.style'
import { Label } from '../Label/Label'
import { Container, Form, Subheading } from './SignUp.style'
import { InitialValues, InputFieldName } from '../../constants/types'

const initialValues: InitialValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUp = () => (
  <Container>
    <h2>Sign Up</h2>
    <Subheading>Don't have an account?</Subheading>
    <p>Sign up with your email and password:</p>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setValues }) => {
        alert(JSON.stringify(values))
        setValues(initialValues)
      }}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor={InputFieldName.DISPLAY_NAME}>Display Name</Label>
          <TextInputField
            id={InputFieldName.DISPLAY_NAME}
            name={InputFieldName.DISPLAY_NAME}
            placeholder="Display Name"
            value={values.displayName}
            onChange={(e) =>
              setFieldValue(InputFieldName.DISPLAY_NAME, e.target.value)
            }
          />
          <Label htmlFor={InputFieldName.EMAIL}>Email</Label>
          <TextInputField
            id={InputFieldName.EMAIL}
            name={InputFieldName.EMAIL}
            placeholder={errors.email && touched.email ? errors.email : 'Email'}
            value={values.email}
            onChange={(e) =>
              setFieldValue(InputFieldName.EMAIL, e.target.value)
            }
          />
          <Label htmlFor={InputFieldName.PASSWORD}>Password</Label>
          <TextInputField
            type={InputFieldName.PASSWORD}
            id={InputFieldName.PASSWORD}
            name={InputFieldName.PASSWORD}
            placeholder="Password"
            value={values.password}
            onChange={(e) =>
              setFieldValue(InputFieldName.PASSWORD, e.target.value)
            }
          />
          <Label htmlFor={InputFieldName.CONFIRM_PASSWORD}>
            Confirm Password
          </Label>
          <TextInputField
            type="password"
            id={InputFieldName.CONFIRM_PASSWORD}
            name={InputFieldName.CONFIRM_PASSWORD}
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={(e) =>
              setFieldValue(InputFieldName.CONFIRM_PASSWORD, e.target.value)
            }
          />
          <CustomButton
            buttonType="inverted"
            type="submit"
            disabled={
              !values.confirmPassword &&
              !values.displayName &&
              !values.email &&
              !values.password
            }
            additionalStyles={'margin-top: 13px;'}
          >
            Submit
          </CustomButton>
        </Form>
      )}
    </Formik>
  </Container>
)
