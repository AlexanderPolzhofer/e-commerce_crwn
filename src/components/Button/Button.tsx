import React from 'react'
import { CustomButton } from './Button.style'

interface ButtonProps {
  label: string
  buttonType: 'inverted' | 'default' | 'googleSignIn'
}

export const Button: React.FC<ButtonProps> = ({ label, buttonType }) => (
  <CustomButton buttonType={buttonType}>{label}</CustomButton>
)
