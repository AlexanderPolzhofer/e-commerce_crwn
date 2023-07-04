import { Formik } from 'formik'
import { Container, Form, Subheading } from '../SignUp/SignUp.style'
import { TextInputField } from '../TextInputField/TextInputField'
import { Label } from '../Label/Label'
import { CustomButton } from '../Button/Button.style'
import { InputFieldName } from '../../constants/types'

interface InitialValues {
  email: string
  password: string
}

const initialValues: InitialValues = {
  email: '',
  password: '',
}

export const SignIn = () => (
  <Container>
    <h2>Sign Up</h2>
    <Subheading>Already have an account?</Subheading>
    <p>Sign up with your email and password:</p>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setValues, setSubmitting }) => {
        alert(JSON.stringify(values))
        setValues(initialValues)
        setSubmitting(false)
      }}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <Form onSubmit={() => handleSubmit()}>
          <Label htmlFor={InputFieldName.EMAIL}>Email</Label>
          <TextInputField
            id="email1"
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
            id="password1"
            name={InputFieldName.PASSWORD}
            placeholder="Password"
            value={values.password}
            onChange={(e) =>
              setFieldValue(InputFieldName.PASSWORD, e.target.value)
            }
          />
          <CustomButton
            buttonType="inverted"
            type="submit"
            disabled={!values.email.length && !values.password.length}
            additionalStyles={'margin-top: 13px;'}
          >
            Submit
          </CustomButton>
        </Form>
      )}
    </Formik>
  </Container>
)
