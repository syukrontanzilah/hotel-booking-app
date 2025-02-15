"use server"

import React from 'react'
import prisma from './lib/db'
import { redirect } from 'next/navigation'

type userType = {
    userId: string
}

const CreateAirbnbHome = async ({userId}: userType) => {
 const data = await prisma.home.findFirst({
    where:{
        userId: userId,
    },
    orderBy:{
        createdAt:"desc",
    }
 });

 if(data === null){
    const data = await prisma.home.create({
        data:{
            userId: userId,
        }
    });
    return redirect(`/create/${data.id}/structure`)
 } else if(
    !data.addedCategory && 
    !data.addedDescription && 
    !data.addedLocation
){
    return redirect(`/create/${data.id}/structure`)
 } else if(data.addedCategory && !data.addedDescription){
    return redirect(`/create/${data.id}/description`)
 }
}

export default CreateAirbnbHome


export async function createCategoryPage(formData:FormData) {
    const categoryName = formData.get('categoryName') as string;
    const homeId = formData.get('homeId') as string;
    const data = await prisma.home.update({
        where:{
            id: homeId,
        },
        data:{
            categoryName: categoryName,
            addedCategory: true,
        },
    });
    return redirect(`/create/${homeId}/description`)
}