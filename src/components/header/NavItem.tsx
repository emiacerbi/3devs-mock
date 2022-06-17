import React from 'react'

interface Props {
  children: string
}

export const NavItem = ({ children }: Props) => {
  return (
    <li className='underline underline-offset-4 cursor-pointer' >
      {children}
    </li>
  )
}
