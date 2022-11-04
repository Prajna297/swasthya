import { useState } from 'react'
import { useRouter } from 'next/router'
import { BellAlertIcon as BellSilent } from '@heroicons/react/24/outline'
import { BellAlertIcon as BellRinging } from '@heroicons/react/24/solid'
import Image from 'next/image'

const DashNav = () => {
  const router = useRouter()

  const [isNotificationsActive, setIsNotificationsActive] = useState(false)

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <nav className='flex py-3 px-5 justify-between items-center bg-white sticky top-0 z-50 shadow-md'>
      <Image src='/favicon.ico' width={42} height={42} />
      <div className='flex items-center space-x-8'>
        <div
          onMouseEnter={() => setIsNotificationsActive(true)}
          onMouseLeave={() => setIsNotificationsActive(false)}
        >
          {isNotificationsActive ? (
            <BellRinging className='h-6 w-6 text-teal-700 cursor-pointer scale-on-hover' />
          ) : (
            <BellSilent className='h-6 w-6 text-teal-700 cursor-pointer scale-on-hover' />
          )}
        </div>
        <button
          onClick={handleLogout}
          className='text-white text-base bg-teal-600 py-2 px-4 mx-2 rounded-tr-2xl rounded-bl-2xl shadow-sm hover:shadow-md shadow-teal-300 hover:shadow-teal-400 scale-on-hover-sm flex space-x-2 items-center'
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default DashNav
