import Head from 'next/head'
import Image from 'next/image'
import { LoginForm } from '../components'
import { LeftOverlay } from '../utils'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Swasthya Login | Sign in to your Swasthya Dashboard</title>
      </Head>

      <main className='min-h-screen grid grid-cols-3 grid-flow-col-dense bg-teal-100 bg-opacity-80'>
        <Image src='/dummy.png' alt='Swasthya Login Banner' width={1024} height={1024} />
        <LoginForm />
      </main>

      <LeftOverlay />
    </div>
  )
}
