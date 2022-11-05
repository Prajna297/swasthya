import { DashboardLayout } from '../../../layouts'
import { PersonalInformation, PreviousAppointments } from '../../../components'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

const patient = {
  id: '0x1234...5565',
  name: 'Mcvean Soans',
  phone: '+91 12345 67890',
  dob: '30/03/2002',
  address: '123, Some Street, Some City, Some State, Some Country'
}

const appointments = [
  {
    doctorName: 'John Doe',
    doctorId: 1,
    appointmentId: 1,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Jaane Doe',
    doctorId: 2,
    appointmentId: 2,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    ailment: 'flu'
  },
  {
    doctorName: 'Rehn Doe',
    doctorId: 3,
    appointmentId: 3,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'diabetes'
  },
  {
    doctorName: 'Yaa Doe',
    doctorId: 4,
    appointmentId: 4,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Prajna Moorthy',
    doctorId: 5,
    appointmentId: 5,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    ailment: 'cough'
  },
  {
    doctorName: 'Mcvean Soans',
    doctorId: 6,
    appointmentId: 6,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Mrunal Murudkar',
    doctorId: 7,
    appointmentId: 7,
    date: '30/03/2023',
    time: '10:00',
    mode: 'online',
    ailment: 'cough'
  },
  {
    doctorName: 'Saptarshi Das',
    doctorId: 8,
    appointmentId: 8,
    date: '30/03/2023',
    time: '10:00',
    mode: 'offline',
    ailment: 'cough'
  }
]

const AppointmentDetails = () => {
  const router = useRouter()
  // TODO: fetch data for patient using doctorId

  return (
    <DashboardLayout>
      <div>
        <div className='flex justify-between'>
          <h1 className='text-3xl text-teal-700 flex items-end space-x-3'>
            Patient Details
          </h1>
          <button onClick={() => router.back()} className='dash-back-btn'>
            <ArrowLeftCircleIcon className='w-5 h-5' />
            <span>Back</span>
          </button>
        </div>

        <PersonalInformation patient={patient} />
        <PreviousAppointments appointments={appointments} />
      </div>
    </DashboardLayout>
  )
}

export default AppointmentDetails
