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
      <ul className='flex space-x-4 text-teal-600'>
        <li className='nav-link'>About</li>
        <li className='nav-link'>Services</li>
        <li className='nav-link'>Pricing</li>
        <li
          onClick={() => router.push('/login')}
          className='cursor-pointer hover:scale-105 transition-all duration-300 flex space-x-2 items-center text-white bg-teal-600 py-2 px-4 rounded-lg'
        >
          Login
          <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
        </li>
      </ul>
    </nav>
  )
}
 
export default Navbar
