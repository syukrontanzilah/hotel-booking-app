import SelectedCategory from '@/app/components/SelectedCategory'
import React from 'react'

const StructureRoute = () => {
  return (
    <>
    <div className='w-3/5 mx-auto'>
        <h2 className='text-3xl font-semibold tracking-tight transition-colors'>Which of these best describe your Home?</h2>
    </div>

    <form>
      <SelectedCategory/>
    </form>
    </>
  )
}

export default StructureRoute