"use client"

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const CreationSubmit = () => {
    const {pending} = useFormStatus()
  return (
    <>
    {pending ? (
        <Button disabled size='lg'><Loader2 className='mr2 h-4 w-4 animate-spin'/></Button>
    ) : (
        <Button type='submit' size='lg'>Next</Button>
    )}
    </>
  )
}

export default CreationSubmit