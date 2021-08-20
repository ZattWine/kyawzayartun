import Image from 'next/image'
import { motion } from 'framer-motion'
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

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Layout>
      <main>
        <div className='my-2'>
          <div className='flex flex-row text-center justify-center'>
            <div className='flex border-2 border-gray-200 shadow-md rounded-full overflow-hidden cursor-pointer'>
              <Image
                src={me.avatar}
                objectFit='cover'
                width={100}
                height={100}
                alt='Profile photo of author.'
              />
            </div>
          </div>

          <div className='flex flex-row text-center justify-center my-2'>
            <h1 className='text-xl font-bold my-2'>{me.fullname}</h1>
          </div>

          <div className='flex flex-row text-center justify-center my-4'>
            <a
              href={me.resume_link}
              className='p-2 rounded-md bg-green-500 text-white text-sm hover:bg-green-400 transition duration-300 ease-in-out'
            >
              Download Resume
            </a>
          </div>

          <div className='flex flex-row text-center justify-center my-2'>
            <motion.p
              className='text-gray-500 text-base max-w-screen-sm'
              variants={sentence}
              initial='hidden'
              animate='visible'
            >
              {me.intro.split('').map((char, idx) => {
                return (
                  <motion.span key={`${char}-${idx}`} variants={letter}>
                    {char}
                  </motion.span>
                )
              })}
            </motion.p>
          </div>
        </div>

        {/* <div className='mt-4'>
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
        </div> */}
      </main>
    </Layout>
  )
}
