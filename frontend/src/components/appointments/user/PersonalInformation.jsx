import Image from 'next/image'

const PersonalInformation = ({ patient }) => {
  const currentYear = new Date().getFullYear()

  return (
    <section className='mt-10 py-4 px-10 mx-20 border-2 border-double border-teal-600 shadow-sm grid grid-cols-2 gap-x-10 items-center bg-gray-50 border-swasthya'>
      <div className='col-span-2 py-2 mb-4 bg-teal-700'>
        <h4 className='text-xl text-center text-white'>Personal Information</h4>
      </div>
      <div className='space-y-6 text-gray-700'>
        <h5>
          <span className='font-bold'>ID:</span> {patient.id}
        </h5>
        <h5>
          <span className='font-bold'>Name:</span> {patient.name}
        </h5>
        <h5>
          <span className='font-bold'>Date Of Birth: </span> {patient.dob}
        </h5>
        <h5>
          <span className='font-bold'>Age:</span>{' '}
          {currentYear - Number.parseInt(patient.dob.split('/')[2])}
        </h5>
        <h5>
          <span className='font-bold'>Phone:</span> {patient.phone}
        </h5>
        <h5>
          <span className='font-bold'>Address:</span> {patient.address}
        </h5>
      </div>
      <div className='border-swasthya bg-slate-300 relative overflow-hidden h-96'>
        <Image
          src='/login--signin/doctor.svg'
          objectFit='cover'
          layout='fill'
        />
      </div>
    </section>
  )
}

export default PersonalInformation
