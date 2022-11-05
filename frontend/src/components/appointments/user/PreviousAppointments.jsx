import { useState } from 'react'
import Link from 'next/link'

const PreviousAppointments = ({ appointments }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='mt-10 py-4 px-10 mx-20 bg-white border-2 border-double border-teal-600 shadow-sm'>
      <div className='col-span-2 py-2 bg-teal-700'>
        <h4 className='text-xl text-center text-white'>
          Previous Appointments
        </h4>
      </div>

      <div className='col-span-2 flex justify-center items-center mt-6'>
        <input
          type='text'
          name='search'
          placeholder='Search by doctor name or ailment'
          className='w-80 py-2 px-4 border-2 border-teal-700 rounded-tr-2xl rounded-bl-2xl outline-none'
          onChange={event => setSearchQuery(event.target.value)}
        />
      </div>
      
      <div className='mt-8 flex-1 text-center h-96 overflow-y-scroll'>
        {/* headers */}
        <div className='grid grid-cols-5 font-semibold py-3 bg-teal-600 text-white px-10 sticky top-0 z-10'>
          <p>Doctor Name</p>
          <p>Ailment</p>
          <p>Date</p>
          <p>Time</p>
          <p>Mode</p>
        </div>

        {/* appointment list */}
        {appointments
          .filter(appointment =>
            appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            appointment.ailment.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(appointment => (
            <Link
              key={appointment.doctorId}
              href={`/appointments/details/${appointment.appointmentId}`}
            >
              <div
              className='grid grid-cols-5 py-4 odd:bg-teal-100 transition-all duration-400 ease-in-out hover:bg-teal-700 hover:text-white cursor-pointer px-10'
              >
                <h4>{appointment.doctorName}</h4>
                <p>{appointment.ailment}</p>
                <p>{appointment.date}</p>
                <p>{appointment.time}</p>
                <p>{appointment.mode}</p>
              </div>
            </Link>
          ))}

      </div>
      <div className='my-10 text-sm text-gray-500 flex items-center justify-center'>
        Showing{' '}
        {
          appointments.filter(appointment =>
            appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            appointment.ailment.toLowerCase().includes(searchQuery.toLowerCase())
          ).length
        }{' '}
        Appointments
      </div>
    </div>
  )
}

export default PreviousAppointments
