import { getPeriodTime } from '@/lib/datetimeUtils'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex flex-col h-20 text-center items-center rounded-2xl bg-white text-gray-700 border-2 border-gray-100 m-4 pt-4 md:flex-row md:h-14 md:justify-between md:items-center md:space-x-4 md:px-7 md:py-2 md:m-4'>
      <div className='uppercase text-indigo-500 text-base md:text-xl font-bold'>
        <Link href='/'>
          <a>{getPeriodTime()}</a>
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row space-x-4'>
          <li>
            <Link href='/'>
              <a className='hover:text-indigo-500'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='hover:text-indigo-500'>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className='hover:text-indigo-500'>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
