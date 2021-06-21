import Link from 'next/link'
import { me } from '../data/me'

export default function Footer() {
  return (
    <footer className='text-center bg-black py-4 mt-4'>
      <div className='flex flex-row space-x-4 justify-between'>
        <div className='ml-2'>
          <Link href='/'>
            <a className='text-gray-400'>E-Mail</a>
          </Link>
        </div>
        <p className='text-gray-400 text-xl mr-2'>
          Copyright &copy; {new Date().getFullYear()} .{' '}
          {`${me.firstname} ${me.middlename} ${me.lastname}`}
        </p>
      </div>
    </footer>
  )
}
