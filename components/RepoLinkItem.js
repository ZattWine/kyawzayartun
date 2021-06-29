export default function RepoLinkItem({ type, url }) {
  return (
    <a
      className='text-green-700 font-semibold hover:text-green-500'
      href={`${url}`}
      target='_blank'
      rel='noreferrer'
    >
      {type}
    </a>
  )
}
