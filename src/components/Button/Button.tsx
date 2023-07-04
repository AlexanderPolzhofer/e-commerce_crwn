import React from 'react'
import { CustomButton } from './Button.style'

interface ButtonProps {
  label: string
  buttonType: 'inverted' | 'default' | 'googleSignIn'
  disabled?: boolean
  additionalStyles?: string
}

export const Button: React.FC<ButtonProps> = ({
  label,
  buttonType,
  disabled,
  additionalStyles,
}) => (
  <CustomButton
    buttonType={buttonType}
    disabled={disabled}
    additionalStyles={additionalStyles}
  >
    {label}
  </CustomButton>
)
