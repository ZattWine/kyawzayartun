import Head from 'next/head'

function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main></main>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      title: 'Post Detail',
      date: '',
      content: '',
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: {},
    fallback: false,
  }
}
