import React from 'react'
import { Formik } from 'formik'
import { TextInputField } from '../TextInputField/TextInputField'
import { CustomButton } from '../Button/Button.style'
import { Label } from '../Label/Label'
import { Form } from './SignUp.style'

interface InitialValues {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const initialValues: InitialValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUp = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = { email: '' }
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(values)
        setSubmitting(false)
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="displayName">Display Name</Label>
          <TextInputField
            id="displayName"
            name="displayName"
            placeholder="Display Name"
            value={values.displayName}
            onChange={handleChange}
          />
          <Label htmlFor="email">Email</Label>
          <TextInputField
            id="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && errors.email}
          <Label htmlFor="password">Password</Label>
          <TextInputField
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <TextInputField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <CustomButton buttonType="default" type="submit">
            Submit
          </CustomButton>
        </Form>
      )}
    </Formik>
  )
}
