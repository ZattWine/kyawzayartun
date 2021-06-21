import Link from 'next/link'
import { format, parseISO } from 'date-fns'

export default function PostItem({ slug, title, date, excerpt, content }) {
  return (
    <div className='border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in'>
      <h1>
        <Link href={`/blog/${slug}`}>
          <a className='text-md font-bold'>{title}</a>
        </Link>
      </h1>
      <div className='text-gray-600 text-xs'>
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <p>{excerpt}</p>
    </div>
  )
}
