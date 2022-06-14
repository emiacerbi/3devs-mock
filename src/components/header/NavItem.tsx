import React from 'react'

interface Props {
  children: string
}

export const NavItem = ({ children }: Props) => {
  return (
    <li className='cursor-pointer underline underline-offset-4' >
      {children}
    </li>
  )
}
