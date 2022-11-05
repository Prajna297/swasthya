import { useRouter } from 'next/router'
import { DashboardLayout } from '../../../layouts'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

const AppointmentDetails = () => {
  const router = useRouter()
  
  return (
    <DashboardLayout>
      <div>
        <div className='flex justify-between'>
          <h1 className='text-3xl text-teal-700 flex items-end space-x-3'>
            Appointment Details
          </h1>
          <button
            onClick={() => router.back()}
            className='dash-back-btn'
          >
            <ArrowLeftCircleIcon className='w-5 h-5' />
            <span>Back</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AppointmentDetails
