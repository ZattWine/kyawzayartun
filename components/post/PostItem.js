import Link from 'next/link'
import { getFormattedDate } from '../../lib/datetimeUtils'

const PostItem = (props) => {
  const { title, date, excerpt, slug } = props
  const dateString = getFormattedDate(date)

  return (
    <Link href={`/blog/${slug}`}>
      <div className='border border-gray-100 shadow hover:shadow-md hover:border-gray-200 hover:text-green-500 rounded-md p-4 transition duration-200 ease-in cursor-pointer'>
        <h1 className='text-lg font-bold'>{title}</h1>
        <div className='text-gray-400 text-sm'>
          <time dateTime={date}>{dateString}</time>
        </div>
        <p className='mt-3 text-gray-600'>{excerpt}</p>
      </div>
    </Link>
  )
}

export default PostItem
