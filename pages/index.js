import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import ProjectItem from '@/components/ProjectItem'
import { me } from '@/data/me'

/* sorting helper function */
function sortByProperty(value) {
  return function (a, b) {
    if (a[value] < b[value]) return 1
    else if (a[value] > b[value]) return -1
  }
}

export default function HomePage() {
  const sortedProjects = me.projects.sort(sortByProperty('id'))
  const avatarHref = me.avatar
  return (
    <Layout>
      <main>
        <div className='my-8'>
          <div className='flex flex-row text-center justify-center'>
            <div className='flex bg-gray-200 rounded-full p-1 cursor-pointer'>
              <Link href={avatarHref} passHref>
                <Image
                  className='rounded-full'
                  src={me.avatar}
                  objectFit='cover'
                  width={100}
                  height={100}
                  alt='Profile photo of author.'
                />
              </Link>
            </div>
          </div>

          <div className='flex flex-row text-center justify-center my-2'>
            <h1 className='text-xl font-bold my-2'>{me.fullname}</h1>
          </div>

          <div className='flex flex-row text-center justify-center my-2'>
            <p className='text-gray-500 text-base max-w-screen-sm'>
              {me.intro}
            </p>
          </div>
        </div>

        <div className='mt-4'>
          <h2 className='text-xl uppercase font-bold'>My Projects</h2>
          <p className='mt-4 text-gray-500'>
            Just practice projects and not good personal projects. But they are
            my memories and I enjoy them and I hope you does.
          </p>
          {sortedProjects.length === 0 && <h2>No projects found.</h2>}
          <div className='mt-4 grid md:grid-cols-2 gap-4'>
            {sortedProjects.length > 0 &&
              sortedProjects.map((p) => <ProjectItem key={p.id} project={p} />)}
          </div>
        </div>
      </main>
    </Layout>
  )
}
