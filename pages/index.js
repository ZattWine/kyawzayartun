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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quaero
          igitur, quo modo hae tantae commendationes a natura profectae subito a
          sapientia relictae sint. Ad eas enim res ab Epicuro praecepta dantur.
          Mihi quidem Antiochum, quem audis, satis belle videris attendere.
          Quoniam, si dis placet, ab Epicuro loqui discimus. Quare obscurentur
          etiam haec, quae secundum naturam esse dicimus, in vita beata.
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
