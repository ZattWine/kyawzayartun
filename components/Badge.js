export default function Badge({ title }) {
  return (
    <span className='text-xs text-green-800 font-semibold rounded-md bg-green-200 p-1'>
      {title.toLowerCase()}
    </span>
  )
}
