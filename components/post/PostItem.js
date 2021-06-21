import Link from 'next/link'
import { getFormattedDate } from '../../lib/dateFormatter'

const PostItem = (props) => {
  console.log(props)
  const { title, date, excerpt, slug } = props
  const dateString = getFormattedDate(date)

  return (
    <div className='border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in'>
      <h1>
        <Link href={`/blog/${slug}`}>
          <a className='text-md font-bold'>{`${title}`}</a>
        </Link>
      </h1>
      <div className='text-gray-600 text-sm'>
        <time dateTime={date}>{dateString}</time>
      </div>
      <p>{excerpt}</p>
    </div>
  )
}

export default PostItem
