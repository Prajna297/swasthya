import { useRouter } from 'next/router'
import { DashboardLayout } from '../../layouts'

const AppointmentDetails = () => {
  const router = useRouter()
  const { patientId } = router.query

  return (
    <DashboardLayout>
      Patient ID: {patientId}
    </DashboardLayout>
  )
}

export default AppointmentDetails
