import Link from 'next/link'
import { getFormattedDate } from '../../lib/datetimeUtils'

const PostItem = (props) => {
  console.log(props)
  const { title, date, excerpt, slug } = props
  const dateString = getFormattedDate(date)

  return (
    <div className='border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in'>
      <h1>
        <Link href={`/blog/${slug}`}>
          <a className='text-lg font-bold hover:text-blue-500'>{`${title}`}</a>
        </Link>
      </h1>
      <div className='text-gray-400 text-sm'>
        <time dateTime={date}>{dateString}</time>
      </div>
      <p className='mt-3 text-gray-600'>{excerpt}</p>
    </div>
  )
}

export default PostItem
