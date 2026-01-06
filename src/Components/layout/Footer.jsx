import React from 'react'

const Footer = () => {
  return ( 
    <footer className="text-white fixed bottom-0 left-0 z-20 w-full mt-72 p-4 shadow-sm sm:flex sm:items-center sm:justify-between md:p-6">
        <span className="sm:text-xs text-sm text-body sm:text-center">© 2026 <a href="#" className="hover:underline">XXXX™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>

  )
}

export default Footer