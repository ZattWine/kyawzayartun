import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getBlogPosts() {
  const allPosts = fs.readdirSync(postsDirectory)

  return allPosts.map((filename) => {
    const slug = filename.replace('.md', '')
    const filecontent = fs.readFileSync(join(postsDirectory, filename), 'utf-8')
    const { data, content } = matter(filecontent)

    return {
      data,
      content,
      slug,
    }
  })
}
