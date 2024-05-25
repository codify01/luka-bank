import React from 'react'
import image from '../assets/react.svg'
import { useLocation } from 'react-router-dom'
const NavBar = () => {

  const location = useLocation()
  let isSignUp = location.pathname === '/signup'

  return (
    <div className={isSignUp?"hidden":null}>
        <nav className='flex justify-between bg-neutral-800 text-white items-center px-2 py-4'>
            <img src={image} alt='user avatar' width='5%' className=''/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>

        </nav>
    </div>
  )
}

export default NavBar