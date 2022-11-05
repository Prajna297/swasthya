import { useSelector } from 'react-redux'
import { selectDashNav } from '../app/features/dashboard/dashNavSlice'
import { DashScreen } from '../components'
import { DashboardLayout } from '../layouts'

const Dashboard = () => {
  const currentScreen = useSelector(selectDashNav)

  return (
    <DashboardLayout>
      <DashScreen currentScreen={currentScreen} />
    </DashboardLayout>
  )
}

export default Dashboard
