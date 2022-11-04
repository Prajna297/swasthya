import Image from 'next/image'
import { useRouter } from 'next/router'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className='fixed top-0 z-50 w-full flex py-3 px-6 bg-white bg-opacity-20 backdrop-blur-sm justify-between items-center'>
      {/* logo */}
      <div>
        <Image src='/favicon.ico' width={50} height={50} />
      </div>

      {/* links */}
      <div className='flex space-x-4 text-teal-600'>
        <p className='nav-link'>About</p>
        <p className='nav-link'>Services</p>
        <p className='nav-link'>Pricing</p>
        <button
          onClick={() => router.push('/login')}
          className='text-white text-base bg-teal-600 py-3 px-4 mx-2 rounded-tr-2xl rounded-bl-2xl shadow-sm hover:shadow-md shadow-teal-300 hover:shadow-teal-400 scale-on-hover-sm flex space-x-2 items-center'
        >
          Login
          <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
