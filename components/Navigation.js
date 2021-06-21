import Link from 'next/link'

export default function Navigation() {
  return (
    <header>
      <nav className='py-3 my-3 border-b border-1 border-gray-200 text-base font-bold rounded-md md:py-4 md:text-lg md:px-10'>
        <ul className='flex flex-row space-x-4 pl-3'>
          <li>
            <Link href='/'>
              <a className='text-indigo-600 hover:text-indigo-500'>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className='text-indigo-600 hover:text-indigo-500'>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
