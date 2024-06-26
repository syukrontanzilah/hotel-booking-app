import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WebLogoImg from '../../public/airbnb-desktop.png';
import MobileLogo from '../../public/airbnb-mobile.webp';

const Navbar = () => {
  return (
    <nav className='w-full border-b'>
        <div className='flex items-center justify-center container mx-auto px-5 lg:px-10 py-5'>
            <Link href={'/'}>
                <Image 
                className='w-32 hidden lg:block'
                src={WebLogoImg} 
                alt='web-logo'
                />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar