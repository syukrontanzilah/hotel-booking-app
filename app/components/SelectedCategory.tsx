"use client"
import React, { useState } from 'react'
import { categoryItems } from '../lib/categoryItems'
import { Card, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

const SelectedCategory = () => {
    const [selectCategory, setSelectCategory] = useState<string | undefined>(undefined);
  return (
    <div className='grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36'>
        <input type='hidden' name='categoryName' value={selectCategory as string} className=''/>
        {categoryItems.map((item, i)=>{
            return(
                <div className='cursor-pointer' key={item.id}>
                    <Card 
                    className={
                        selectCategory == item.name ? "border-primary" : 
                        ""
                    }
                    onClick={()=>setSelectCategory(item.name)}
                    >
                        <CardHeader className='flex flex-col justify-center items-center'>
                            <Image src={item.imageUrl} alt='item-img' 
                            height={32} 
                            width={32}
                            className='w-8 h-8'
                            />
                            <h3 className={selectCategory ==item.name?'font-medium text-primary': 'font-medium'}>{item.title}</h3>
                        </CardHeader>
                    </Card>
                </div>
            )
        })}
    </div>
  )
}

export default SelectedCategory