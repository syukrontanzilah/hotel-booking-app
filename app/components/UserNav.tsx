import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react';
import UserImg from '../../public/user.png'
import {
    RegisterLink, 
    LoginLink, 
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const UserNav = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser()
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3'>
                <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5'/>
                <img 
                src={
                    user?.picture ??
                    '/user.png'
                } 
                alt='user-img' 
                className='rounded-full w-8 h-8 lg:block'
                />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[200px]'>
            {
                user?
                (
                <>
                <DropdownMenuItem>
                    <form className='w-full'>
                     <button type='submit' className='w-full text-start'>Airbnb your Home</button>
                    </form>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href='/my-homes' className='w-full'>My Listing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href='/favorites' className='w-full'>Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href='/reservations' className='w-full'>Reservations</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                {user?.given_name} {user?.family_name} 
                </DropdownMenuItem>
                <DropdownMenuItem>
                <LogoutLink className='w-full'>Logout</LogoutLink>
                </DropdownMenuItem>
                </>
                )
                :
                (
                <>
                <DropdownMenuItem>
                    <RegisterLink className='w-full'>Register</RegisterLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LoginLink className='w-full'>Login</LoginLink>
                </DropdownMenuItem>
                </>                    
                )
            }

        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav