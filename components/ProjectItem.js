import RepoLinkItem from './RepoLinkItem'
import Badge from './Badge'

export default function ProjectItem({ project }) {
  return (
    <div className='w-full border border-gray-100 hover:border-gray-200 shadow hover:shadow-md p-4'>
      <div className='border-b border-gray-200 py-2'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-xl font-bold'>{project.title}</h1>
          {/* <span className='text-gray-500'>{project.date}</span> */}
        </div>
      </div>
      <div className='p-2 border-b'>
        <p className='text-gray-500'>{project.description}</p>

        <div className='flex flex-row space-x-2 mt-4'>
          {project.tags.length > 0 &&
            project.tags.map((i, idx) => <Badge key={idx} title={i} />)}
        </div>
      </div>
      <div className='py-2 flex flex-row space-x-4 justify-end'>
        <div className='flex flex-row space-x-4'>
          {project.links.length > 0 &&
            project.links.map((i) => (
              <RepoLinkItem key={i.type} type={i.type} url={i.url} />
            ))}
        </div>
      </div>
    </div>
  )
}
