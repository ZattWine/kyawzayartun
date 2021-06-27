import { getBlogPosts } from '../../lib/getPost'
import moment from 'moment'
import Layout from '@/components/Layout'
import PostItem from '@/components/post/PostItem'

function BlogPage({ posts }) {
  return (
    <Layout title='Blog | Zayar Tun'>
      <main>
        <div className='space-y-4 mt-4'>
          {posts.map((post) => (
            <PostItem
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getBlogPosts().sort((p1, p2) =>
    moment(p1.data.date) > moment(p2.data.date) ? -1 : 1
  )
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  }
}

export default BlogPage
