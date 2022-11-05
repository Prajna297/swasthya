import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
    link: '/dashboard'
  },
  {
    Icon: CalendarDaysIcon,
    title: 'Schedule',
    link: '/dashboard/schedule'
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Chat',
    link: '/dashboard/chat'
  },
  {
    Icon: IdentificationIcon,
    title: 'Identification',
    link: '/dashboard/profile'
  }
]

const SidebarNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  const router = useRouter()
  const activeLink = router.pathname

  return (
    <div
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
      className={`col-span-1 flex flex-col min-h-screen px-4 bg-teal-700 w-[80px] ${
        sidebarOpen && 'w-[220px]'
      } transition-all duration-300 ease-in-out`}
    >
      <div className='pt-20 mx-auto flex flex-col space-y-10'>
        {sideNavItems.map((item, index) => (
          <Link
            key={item.title + '-' + index}       
            href={item.link}
          >
            <div
              className={`sidenav-item ${
                index !== sideNavItems.length - 1 && 'border-b'
              } pb-4 ${!sidebarOpen ? 'border-dotted' : 'border-solid'} ${activeLink === item.link && 'opacity-100'}`}
            >
              <item.Icon className='h-8 w-8 text-white' />
              {sidebarOpen && <p>{item.title}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SidebarNav
