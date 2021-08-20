import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex space-x-4 justify-center items-center border-b-2 border-gray-100 py-4 my-4'>
      <nav>
        <ul className='flex flex-row space-x-4 text-xl font-bold'>
          <li>
            <Link href='/'>
              <a className='hover:text-green-700'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className='hover:text-green-700'>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
