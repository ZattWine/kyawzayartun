import Layout from '@/components/Layout'
import ProjectItem from '@/components/ProjectItem'
import { me } from '@/data/me'

function sortByProperty(value) {
  return function (a, b) {
    if (a[value] < b[value]) return 1
    else if (a[value] > b[value]) return -1
  }
}

export default function HomePage() {
  const sortedProjects = me.projects.sort(sortByProperty('id'))
  return (
    <Layout>
      <main>
        <h1 className='text-2xl text-gray-700 font-bold'>Hey, what's up?</h1>
        <p className='mt-4 text-gray-500'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className='mt-4'>
          <h2 className='text-xl text-gray-700 uppercase font-bold'>
            My Projects
          </h2>
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
