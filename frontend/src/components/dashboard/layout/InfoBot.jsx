import { useState } from 'react'
import {
  ArrowRightCircleIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'

const faqList = [
  {
    id: 1,
    question: 'What is Swasthya?',
    answer:
      'Swasthya is a secure, modern and unified platform for patients and doctors.'
  },
  {
    id: 2,
    question: 'How to Scheudle an Appointment?',
    answer: 'Sure... We would love to help'
  },
  {
    id: 3,
    question: 'How to locate Patient Information?',
    answer: 'We will tell you in a bit...'
  }
]

const InfoBot = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className='fixed bottom-10 right-6 z-40 flex flex-col space-y-2 transition-all duration-400 ease-in-out'>
      <button
        onClick={handleToggle}
        className={`w-10 h-10 p-1 bg-teal-600 cursor-pointer scale-on-hover hover:shadow-md hover:shadow-teal-100 ${
          isOpen ? 'self-end rounded-br-2xl rounded-tl-2xl' : 'border-swasthya'
        }`}
      >
        {isOpen ? (
          <XCircleIcon className='w-8 h-8 text-white' />
        ) : (
          <InformationCircleIcon className='w-8 h-8 text-white' />
        )}
      </button>

      {isOpen && (
        <div className='bg-white shadow-md border-2 border-teal-600 w-96 h-96 overflow-scroll scroll-smooth'>
          <div className='sticky top-0 text-white bg-teal-600 font-semibold shadow-sm flex items-center justify-center mb-4'>
            <h6 className='p-4'>Hello, I&apos;m Swasthya Infobot</h6>
          </div>

          {/* faq list */}
          {faqList.map(faq => (
            <div key={faq.id} className='mx-2 my-3'>
              <button
                className='text-gray-600 px-2 py-2 border border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 ease-in-out cursor-pointer flex justify-between items-center w-full'
                onClick={() => alert(faq.answer)}
              >
                <span>{faq.question}</span>
                <ArrowRightCircleIcon className='w-5 h-5' />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default InfoBot
