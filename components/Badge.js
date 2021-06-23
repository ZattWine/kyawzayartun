export default function Badge({ title }) {
  return (
    <span className='text-xs text-white rounded-md bg-blue-700 p-1'>
      {title.toLowerCase()}
    </span>
  )
}
