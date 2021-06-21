import Head from 'next/head'
import { getBlogPosts } from '../../lib/getPost'
import markdownToHtml from '../../lib/markdownToHtml'
import { getFormattedDate } from '../../lib/dateFormatter'
import { Remarkable } from 'remarkable'
import { linkify } from 'remarkable/linkify'
import hljs from 'highlight.js'

// import 'prismjs/themes/prism.css'
import 'highlight.js/styles/github-dark.css'

function BlogPage({ title, date, content }) {
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
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const allPosts = getBlogPosts()
  const { data, content } = allPosts.find((item) => item.slug === params.slug)
  const htmlContent = await markdownToHtml(content || '')
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

export default BlogPage
