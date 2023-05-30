import React from 'react'
import { CustomLabel } from './Label.style'

interface LabelProps {
  htmlFor: string
  children: React.ReactNode
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <CustomLabel htmlFor={htmlFor}>{children}</CustomLabel>
)
