import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface CustomButtonProps {
  buttonType: 'inverted' | 'default' | 'googleSignIn'
  disabled?: boolean
  additionalStyles?: string
}

export const CustomButton = styled.button<CustomButtonProps>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  font-weight: bolder;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: center;
  ${({ additionalStyles }) => additionalStyles}

  ${({ buttonType }) => {
    switch (buttonType) {
      case 'inverted':
        return css`
          background-color: white;
          color: black;
          border: 1px solid black;

          &:hover:enabled {
            background-color: black;
            color: white;
            border: none;
          }
        `
      case 'googleSignIn':
        return css`
          background-color: #4285f4;
          color: white;
          border: none;

          &:hover:enabled {
            background-color: #357ae8;
            border: 1px solid white;
          }
        `
      default:
        return css`
          background-color: black;
          color: white;
          border: none;

          &:hover:enabled {
            background-color: white;
            color: black;
            border: 1px solid black;
          }
        `
    }
  }}
`
