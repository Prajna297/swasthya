import { useSelector } from 'react-redux'
import { selectDashNav } from '../app/features/dashboard/dashNavSlice'
import { DashMain } from '../components'
import { DashboardLayout } from '../layouts'

const Dashboard = () => {
  const currentScreen = useSelector(selectDashNav)

  return (
    <DashboardLayout>
      <DashMain currentScreen={currentScreen} />
    </DashboardLayout>
  )
}

export default Dashboard
