import { useEffect, useState } from 'react'
import { getPeriodTime } from '@/lib/datetimeUtils'
import Link from 'next/link'

export default function Header() {
  const initialGreetingText = getPeriodTime()
  const [greetingText, setGreetingText] = useState(initialGreetingText)

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreetingText('Nice To Meet You!')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <header className='flex flex-col text-center items-center rounded-2xl bg-white text-gray-700 m-4 pt-4 md:flex-row md:justify-between md:items-center md:space-x-4 md:px-7 md:py-2 md:m-4'>
      <div>
        <Link href='/'>
          <a className='uppercase text-green-700 text-3xl font-bold'>
            <h3>{greetingText}</h3>
          </a>
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row space-x-4 text-xl mt-2 md:mt-0'>
          <li>
            <Link href='/'>
              <a className='uppercase hover:text-green-700'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='uppercase hover:text-green-700'>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className='uppercase hover:text-green-700'>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
