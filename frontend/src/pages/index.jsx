import Head from 'next/head'
import { Jumbotron } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swasthya | Keeping You and Your Records </title>
        <meta
          name='description'
          content='A secure, modern and unified platform for patients and doctors'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <Navbar /> */}

      <Jumbotron />

      {/* <Footer /> */}
    </div>
  )
}
