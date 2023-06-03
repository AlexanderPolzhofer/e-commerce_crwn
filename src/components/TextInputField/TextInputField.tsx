import React from 'react'
import { TextArea } from './TextInputField.style'

interface TextInputFieldProps {
  type?: React.HTMLInputTypeAttribute
  placeholder: string
  id: string
  name: string
  value?: string
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <TextArea
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
    />
  )
}
