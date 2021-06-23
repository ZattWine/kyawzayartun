import Image from 'next/image'
import Layout from '@/components/Layout'
import { me } from '@/data/me'

export default function AboutPage() {
  return (
    <Layout title='About | Zayar Tun'>
      <main className='bg-gray-100 p-6'>
        <div className='flex flex-row text-center justify-center'>
          <div className='flex bg-gray-200 rounded-full p-1 cursor-pointer'>
            <Image
              className='rounded-full'
              src={me.avatar}
              objectFit='cover'
              width={100}
              height={100}
              alt='Profile photo of author.'
            />
          </div>
        </div>

        <div className='flex flex-col text-center'>
          <h1 className='text-xl font-bold text-gray-700 mt-2'>
            {me.fullname}
          </h1>
          <p className='mt-4 text-gray-500 text-base'>{me.intro}</p>
        </div>
      </main>
    </Layout>
  )
}
