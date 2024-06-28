"use client"
import React, { useCallback } from 'react'
import { categoryItems } from '../lib/categoryItems'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

const MapFilterItems = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('filter')
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value:string)=>{
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },[searchParams])

  return (
    <div className='flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar'>
        {categoryItems.map((item, i)=>{
            return(
                <Link 
                href={pathname + "?" + createQueryString("filter", item.name)} 
                key={i}
                className={cn(
                    search === item.name ? 
                    "border-b-2 text-primary border-primary pb-1 flex-shrink-0" : "opacity-60 flex-shrink-0", 
                    "flex flex-col gap-y-3 items-center"
                )}
                >
                    <div className='w-6 h-6'>
                        <Image src={item.imageUrl} alt='icon-menu' 
                        className='w-6 h-6'
                        height={24}
                        width={24}
                        />
                    </div>
                    <div className='text-xs font-medium'>{item.title}</div>
                
                </Link>
            )
        })}
    </div>
  )
}

export default MapFilterItems