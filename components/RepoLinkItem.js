export default function RepoLinkItem({ type, url }) {
  return (
    <a
      className='text-blue-700 hover:text-blue-500'
      href={`${url}`}
      target='_blank'
      rel='noreferrer'
    >
      {type}
    </a>
  )
}
