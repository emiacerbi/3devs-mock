import React, { useState } from 'react'

import logo from '../../../public/logo.png'
// import { NavItem } from './NavItem'

export const Header = () => {
  // const [first, setfirst] = useState(second)

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      text: 'Home',
      selected: false
    },
    {
      id: 2,
      text: 'Menu',
      selected: false
    },
    {
      id: 3,
      text: 'Productos',
      selected: false
    },
    {
      id: 4,
      text: 'Contacto',
      selected: false
    }
  ])

  const selectMenuItem = (id: number) => {
    setMenuItems(prevMenu => {
      return prevMenu.map(item => item.id === id ? { ...item, selected: !item.selected } : { ...item, selected: false })
    })
  }

  return (
    <header className='bg-headerBg rounded-b-[2.5rem] fixed w-full z-10'>
      <div className='container py-3 px-14 flex items-center'>
        <img src={logo} alt="logo" width={75} height={75} />

        <nav className='ml-auto'>
          <ul className='flex gap-10 text-white text-lg'>
            {
              menuItems.map(item => {
                return (
                  <li
                    key={item.text}
                    onClick={() => selectMenuItem(item.id)}
                    className={`cursor-pointer underline underline-offset-4 hover:text-red-400 duration-200 ${item.selected && 'text-red-400'} `}
                  >
                    {item.text}
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}
