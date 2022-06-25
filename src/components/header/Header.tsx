import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      text: 'Home',
      selected: false,
      to: '/'
    },
    {
      id: 2,
      text: 'Menu',
      selected: false,
      to: '/menu'
    },
    {
      id: 3,
      text: 'Productos',
      selected: false,
      to: '/'
    },
    {
      id: 4,
      text: 'Contacto',
      selected: false,
      to: '/contacto'
    }
  ])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const selectMenuItem = (id: number) => {
    setMenuItems(prevMenu => {
      return prevMenu.map(
        item => item.id === id ? { ...item, selected: !item.selected } : { ...item, selected: false }
      )
    })
  }

  return (
    <header className='fixed z-10 w-full bg-headerBg rounded-b-[2.5rem]'>
      <div className='container flex items-center py-1 px-10 pb-2 mx-auto'>
        <img src={'logo2.png'} alt="logo" width={55} height={55} className='opacity-80 cursor-pointer' onClick={goToTop} />

        <nav className='ml-auto'>
          <ul className='flex gap-10 text-lg text-white'>
            {
              menuItems.map(item => {
                return (
                  <li
                    key={item.text}
                    onClick={() => selectMenuItem(item.id)}
                    className={`cursor-pointer underline underline-offset-8 hover:text-red-400 duration-200 ${item.selected && 'text-red-400'}`}
                  >
                    <Link to={item.to}>
                      {item.text}
                    </Link>
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
