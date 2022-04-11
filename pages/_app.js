import Layout from '../components/Layout'
//import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <meta name="description" content="default"/>
    <title>Course</title>
  </Head>

  <Layout> 
  <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default MyApp
