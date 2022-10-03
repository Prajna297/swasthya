import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/login')
  }

  return (
    <section className='relative overflow-hidden'>
      {/* accent */}
      <div className='w-1 h-0 border-teal-100 border-t-[40rem] border-r-[120rem] border-r-transparent border-l-transparent' />

      <div className='absolute top-20 left-32 flex items-center p-10 space-x-20'>
        <motion.div
          whileInView={{
            scale: [0.5, 1],
            x: [-100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <Image
            src='/banner.svg'
            width={1600}
            height={1600}
            className='shadow-lg rounded-full p-5 border-2 bg-teal-300'
          />
        </motion.div>

        <motion.div
          className='flex flex-col pr-6'
          whileInView={{
            scale: [0.8, 1],
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <h2 className='text-8xl text-teal-800 opacity-80 text-right pb-10'>
            Hello, Swasthya
          </h2>

          <div className='ml-40 mb-10 text-right leading-10'>
            <p className='text-teal-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit
              eveniet architecto reprehenderit, quidem maiores maxime
              perferendis quae nobis ad! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eum tenetur assumenda id totam animi nesciunt,
              tempore sint dolorem est voluptate.
            </p>

            <button
              onClick={handleSignIn}
              className='text-white text-base bg-teal-600 py-3 px-4 m-2 mt-6 rounded-full shadow-lg shadow-teal-300 hover:shadow-teal-400'
            >
              <div className='flex space-x-3'>
                Get Started
                <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
