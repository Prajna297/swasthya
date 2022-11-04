import { DashNav, SidebarNav, DashFooter } from '../components'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashNav />

      <main className='w-full flex max-w-6xl'>
        <SidebarNav />
        <div className='flex-1'>
          {children}
        </div>
      </main>

      <DashFooter />
    </div>
  )
}

export default DashboardLayout
