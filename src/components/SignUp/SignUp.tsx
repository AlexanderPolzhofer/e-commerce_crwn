import { Formik } from 'formik'
import { TextInputField } from '../TextInputField/TextInputField'
import { CustomButton } from '../Button/Button.style'
import { Label } from '../Label/Label'

export const SignUp = () => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values, actions) => {
      console.log({ values, actions })
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
  >
    <form>
      <Label htmlFor="firstName">First Name</Label>
      <TextInputField
        id="firstName"
        name="firstName"
        placeholder="First Name"
      />
      <CustomButton buttonType="default" type="submit">
        Submit
      </CustomButton>
    </form>
  </Formik>
)
