import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from '@/components/Layout'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='text-center my-20'>
        <h1 className='text-5xl'>
          <FaExclamationTriangle className='w-full self-center' /> 404
        </h1>
        <h4 className='my-4'>Oops! There is nothing here.</h4>
        <Link href='/'>Go Back Home</Link>
      </div>
    </Layout>
  )
}
