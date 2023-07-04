import React from 'react'
import { TextArea } from './TextInputField.style'

interface TextInputFieldProps {
  type?: React.HTMLInputTypeAttribute
  placeholder: string
  id: string
  name?: string
  value?: string
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  autoComplete?: string
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
  autoComplete = 'off',
}) => {
  return (
    <TextArea
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
    />
  )
}
