import React from 'react'

interface TextInputFieldProps {
  type: React.HTMLInputTypeAttribute
  placeholder: string
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  type,
  placeholder,
}) => {
  return <input type={type} placeholder={placeholder} />
}
