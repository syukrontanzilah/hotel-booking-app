import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react';
import UserImg from '../../public/user.png'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const UserNav = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3'>
                <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5'/>
                <Image src={UserImg} alt='user-img' className='rounded-full w-8 h-8 lg:block'/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[200px]'>
            <DropdownMenuItem>
                <RegisterLink className='w-full'>Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <LoginLink className='w-full'>Login</LoginLink>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav