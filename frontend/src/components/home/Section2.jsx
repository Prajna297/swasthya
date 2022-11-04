import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const Section2 = () => {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/login')
  }

  return (
    <section className='relative overflow-hidden'>
      <div
        className='grid grid-cols-2 pl-20'
      >
        <motion.div
          viewport={{ once: true }}
          whileInView={{
            scale: [0.8, 1],
            x: [-100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <h2 className='text-8xl text-teal-800 opacity-80 pb-10'>
            Powered by Blockchain
          </h2>

          <div className='mb-10 leading-10'>
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
              className='section-btn'
            >
              <div className='flex space-x-3'>
                Know How?
                <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
              </div>
            </button>
          </div>
        </motion.div>

        <motion.div
          className='pl-20'
          viewport={{ once: true }}
          whileInView={{
            scale: [0.5, 1],
            x: [100, 0],
            opacity: [0, 1],
            transition: { duration: 1 }
          }}
        >
          <Image
            src='/section2.svg'
            width={550}
            height={550}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Section2
