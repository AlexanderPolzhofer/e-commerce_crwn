import React from 'react'

interface LogoSVGProps {
  source: string
}

export const LogoSVG: React.FC<LogoSVGProps> = ({ source }) => (
  <img src={source} />
)
