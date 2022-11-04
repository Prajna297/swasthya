import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectDashNav, setDashNav } from '../../app/features/dashboard/dashNavSlice'
import {
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline'

const sideNavItems = [
  {
    Icon: ClipboardDocumentListIcon,
    title: 'Dashboard',
  },
  {
    Icon: CalendarDaysIcon,
    title: 'Schedule',
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Chat',
  },
  {
    Icon: IdentificationIcon,
    title: 'Identification',
  }
]

const SidebarNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const dispatch = useDispatch()
  const title = useSelector(selectDashNav)

  const handleNavigation = (title) => {
    if (router.pathname !== '/dashboard') {
      router.push('/dashboard')
    }
    
    dispatch(setDashNav(title))
  }

  return (
    <div
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
      className={`col-span-1 flex flex-col min-h-screen px-4 bg-teal-700 w-[80px] ${sidebarOpen && 'w-[220px]'} transition-all duration-300 ease-in-out`}
    >
      <ul className='pt-20 mx-auto flex flex-col space-y-10'>
        {sideNavItems.map((item, index) => (
          <li
            key={item.title + '-' + index}
            className={`sidenav-item ${index !== sideNavItems.length - 1 && 'border-b'} pb-4 ${!sidebarOpen ? 'border-dotted' : 'border-solid'} ${title === item.title && 'opacity-100'}`}
            onClick={() => handleNavigation(item.title)}
          >
            <item.Icon className='h-8 w-8 text-white' />
            {sidebarOpen && (
              <p>{item.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarNav
