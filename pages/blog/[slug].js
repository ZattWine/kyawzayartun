import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { getBlogPosts } from '../../lib/getPost'
import markdownToHtml from '../../lib/markdownToHtml'
import { getFormattedDate } from '../../lib/datetimeUtils'
import { Remarkable } from 'remarkable'
import { linkify } from 'remarkable/linkify'
import hljs from 'highlight.js'
import Layout from '@/components/Layout'

// import 'prismjs/themes/prism.css'
import 'highlight.js/styles/github-dark.css'

function BlogViewPage({ title, date, content }) {
  const md = new Remarkable('full', {
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value
      } catch (err) {}

      return '' // use external default escaping
    },
  }).use(linkify)

  return (
    <Layout title={title}>
      <main>
        <div className='mb-2 py-2'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <div className='text-gray-600 text-sm mt-2'>
            {getFormattedDate(date)}
          </div>
        </div>
        <div
          className='prose prose-green prose-sm sm:prose lg:prose-lg xl:prose-xl mt-10'
          dangerouslySetInnerHTML={{ __html: md.render(content) }}
        />
      </main>

      <div className='mt-4'>
        <Link href='/blog'>
          <a className='text-sm text-green-700 bg-green-100 rounded-md hover:bg-green-200 p-2'>
            Go Back
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const allPosts = getBlogPosts()
  const { data, content } = allPosts.find((item) => item.slug === params.slug)
  // const htmlContent = await markdownToHtml(content || '')
  return {
    props: {
      ...data,
      content,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = getBlogPosts()
  return {
    paths: allPosts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: false,
  }
}

export default BlogViewPage
