import React from 'react'
import violetmobile from '@/assets/violetmobile.png'
import NEETAIBOT from '@/assets/NEETAIBOT.svg'
import telegram from '@/assets/telegram.png'
import neetlogo from '@/assets/neetlogo.png'
import Image from 'next/image'
import Link from 'next/link'
const Neetmobile = () => {
    return(
        <>
            <div className='relative lg:hidden sm:block xs:block '>
            <Image className='w-full h-[681px]' src={violetmobile} alt='' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                <div className='pt-20' ><p className='text-white font-poppins text-lg font-medium leading-normal'>NEET AI Tutor</p></div>
                <div className='py-10'><p className='w-[289px] text-white font-montserrat text-[20px] font-extrabold leading-normal'>Effortless <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4EA0FB] via-[#9354F7] to-[#D70BF4]'>NEET learning</span> at your fingertips, AI Chat companion on Telegram!</p></div>
                <div className="flex nbutton pb-6">
                <Link href="https://neetaitutor.thesimpleai.com/signup" className='' target='_self'>
            <button className=" ebutton1  text-white rounded-md mr-4">
              Try For Free
            </button>
            </Link>
            <Link href="https://neetaitutor.thesimpleai.com/" className='' target='_self'>
            <button className="ebutton2 text-white rounded-md">
              Learn More
            </button>
            </Link>
          </div>
                <div className='mx-12' ><Image src={NEETAIBOT} alt='' /></div>
            </div>
            <Image className='absolute top-[385px] left-8 w-[45px] h-[45px] ' src={neetlogo} alt=''/>
            <Image className='absolute top-[581px] left-[309px] w-[45px] h-[45px] ' src={telegram} alt=''/>
            </div>
        </>
    )
}
export default Neetmobile