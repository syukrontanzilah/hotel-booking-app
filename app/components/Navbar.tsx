import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WebLogoImg from '../../public/airbnb-desktop.png';
import MobileLogo from '../../public/airbnb-mobile.webp';
import UserNav from './UserNav';

const Navbar = () => {
  return (
    <nav className='w-full border-b'>
        <div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5'>
            {/* logo */}
            <Link href={'/'}>
                <Image 
                className='w-32 hidden lg:block'
                src={WebLogoImg} 
                alt='web-logo'
                />
                <Image 
                className='block lg:hidden w-12'
                src={MobileLogo} 
                alt='web-logo'
                />
            </Link>
            {/*  */}
            <div className='rounded-full border px-5 py-2'>
                search comp
            </div>
            <UserNav/>
        </div>
    </nav>
  )
}

export default Navbar