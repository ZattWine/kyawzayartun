import { FaGithub, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { getCurrentYear } from '@/lib/datetimeUtils'
import { me } from '@/data/me'

export default function Footer() {
  return (
    <footer className='flex flex-col space-x-4 border-t p-12'>
      <p className='text-center text-gray-500'>
        Copyright &copy; {getCurrentYear()} . {me.fullname}
      </p>
      <div className='mt-4 self-center'>
        <ul className='flex flex-row space-x-4 text-2xl text-gray-500'>
          <li>
            <a
              href={me.sociallinks.twitter}
              target='_blank'
              className='hover:text-blue-500'
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href={me.sociallinks.facebook}
              target='_blank'
              className='hover:text-blue-800'
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href={me.sociallinks.github}
              target='_blank'
              className='hover:text-gray-800'
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${me.sociallinks.email}`}
              target='_blank'
              className='hover:text-red-500'
            >
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
