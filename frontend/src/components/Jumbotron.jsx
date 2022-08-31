import { useRouter } from 'next/router'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'
import { JumbotronAccent } from '../utils';

const Jumbotron = () => {
  const router = useRouter();
  
  const handleSignIn = () => {
    router.push('/login');
  }

  return (
    <>
      <JumbotronAccent />
      <div className='absolute top-0 left-0 w-full flex justify-between'>
        <object data='/banner.svg' width='500' height='500' className='relative top-40 left-20 shadow-lg rounded-full p-5' />

        <div className='flex flex-col items-end'>
          <h2 className='text-8xl text-teal-800 opacity-80 mr-8 mt-40 mb-10'>
            Hello, Swasthya
          </h2>

          <div className='mr-8 w-8/12 text-right leading-8'>
            <p className='text-teal-700'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit eveniet architecto reprehenderit, quidem maiores maxime perferendis quae nobis ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur assumenda id totam animi nesciunt, tempore sint dolorem est voluptate.
            </p>

            <button
              onClick={handleSignIn}
              className='text-white text-sm bg-teal-600 py-2 px-3 m-2 mt-6 rounded-full shadow-lg shadow-teal-300 hover:shadow-teal-400'
              >
              <div className='flex space-x-3'>
                Get Started
                <ArrowRightCircleIcon className='h-5 w-5 ml-2' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;