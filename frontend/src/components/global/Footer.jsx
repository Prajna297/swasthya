import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { footerLinks, footerSocialLinks } from '../../constants'

const Footer = () => {
  const router = useRouter()

  return (
    <footer className='w-full bg-teal-700 text-white px-32 pt-16 pb-8 flex overflow-x-auto space-x-32'>
      {/* left section - links */}
      <div className='flex flex-col space-y-32'>
        <div className='flex'>
          {/* page links */}
          <div className='flex flex-col items-start space-y-10'>
            {footerLinks.page.map(link => (
              <button
                onClick={() => router.push(link.href)}
                key={link.text}
                className='font-semibold scale-on-hover cursor-pointer hover:text-teal-300'
              >
                {link.text}
              </button>
            ))}
          </div>

          {/* tech links */}
          <div className='flex ml-32 space-x-32'>
            {footerLinks.tech.map(linkObject => (
              <div key={linkObject.title} className='space-y-10'>
                <p className='font-semibold cursor-default hover:text-teal-300'>
                  {linkObject.title}
                </p>
                <ul className='space-y-10'>
                  {linkObject.links.map(link => (
                    <li
                      key={linkObject.title + ' ' + link}
                      className='text-zinc-200 cursor-default hover:text-teal-300'
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom copyrights section */}
        <div className='text-zinc-200 text-sm border-t border-zinc-200 pb-5'>
          <div className='flex mt-3'>
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
      </div>

      {/* right section - contacts */}
      <div className=''>
        <p className='font-semibold'>Contact Us At</p>

        <div className='flex flex-col mt-14 mb-12 space-y-4'>
          <div className='flex items-center'>
            <EnvelopeIcon className='h-7 w-7' />
            <p className='ml-4 mr-14'>Email</p>
            <a
              href='mailto:contactus@kinesiis.in'
              className='text-zinc-200 underline hover:text-teal-300'
            >
              contactus@swasthya.co.in
            </a>
          </div>
          <div className='flex items-center'>
            <MapPinIcon className='h-7 w-7' />
            <p className='ml-4 mr-8'>Location</p>
            <p className='text-zinc-200'>Thane, Maharashtra, India</p>
          </div>
          <div className='flex items-center'>
            <PhoneIcon className='h-7 w-7' />
            <p className='ml-4 mr-12'>Phone</p>
            <a
              href='tel:+919819236390'
              className='text-zinc-200 underline hover:text-teal-300'
            >
              Mobile: &#40;+91&#41; 9819236390
            </a>
          </div>
        </div>

        <p className='font-semibold'>Follow us on:</p>
        <div className='flex mt-4 space-x-4'>
          {footerSocialLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className='cursor-pointer scale-on-hover hover:scale-110 flex items-center justify-center'
            >
              <Image src={link.path} alt={link.href} width={40} height={40} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
