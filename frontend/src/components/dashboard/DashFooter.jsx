const DashFooter = () => {
  return (
    <footer className='w-full bg-teal-700'>
      <div className='text-zinc-200 text-sm pt-4 pb-6'>
        <div className='flex mt-3 items-center justify-center'>
          <p className='hover:underline hover:cursor-pointer hover:text-teal-300'>
            Privacy Policy
          </p>
          <span className='mx-4'>|</span>
          <p className='hover:underline hover:cursor-pointer hover:text-teal-300'>
            Sitemap
          </p>
          <span className='mx-4'>|</span>
          <p className='hover:underline hover:cursor-pointer hover:text-teal-300'>
            Copyright@ 2022 Swasthya Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default DashFooter
